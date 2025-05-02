import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Setup scroll animations for all elements with data-scroll attribute
export const setupScrollAnimation = () => {
  const scrollElements = document.querySelectorAll('[data-scroll]');
  
  function elementInView(el: Element) {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= window.innerHeight * 0.8;
  }
  
  function displayScrollElement(element: Element) {
    element.classList.add('in-view');
  }
  
  function hideScrollElement(element: Element) {
    element.classList.remove('in-view');
  }
  
  function handleScrollAnimation() {
    scrollElements.forEach((el) => {
      if (elementInView(el)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  }
  
  // Add initial animation classes
  scrollElements.forEach(el => {
    el.classList.add('transform', 'translate-y-6');
  });
  
  // Initial check for elements in view
  setTimeout(handleScrollAnimation, 100);
  
  // Listen for scroll events
  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  });
};

// Initialize 3D animation for hero section
export const init3DAnimation = (canvas: HTMLElement) => {
  // Initialize Three.js
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  canvas.appendChild(renderer.domElement);
  
  // Add ambient light
  const ambientLight = new THREE.AmbientLight(0x404040, 2);
  scene.add(ambientLight);
  
  // Add directional light
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);
  
  // Check theme for color
  const isDarkMode = document.documentElement.classList.contains('dark');
  
  // Create a shield geometry to represent security
  const shieldGeometry = new THREE.IcosahedronGeometry(5, 1);
  const material = new THREE.MeshPhongMaterial({
    color: isDarkMode ? 0x1E40AF : 0x0D9488,
    wireframe: true,
    transparent: true,
    opacity: 0.7,
    side: THREE.DoubleSide
  });
  
  const shield = new THREE.Mesh(shieldGeometry, material);
  scene.add(shield);
  
  // Create points for a particle effect
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 2000;
  
  const posArray = new Float32Array(particlesCount * 3);
  for(let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 50;
  }
  
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.1,
    color: isDarkMode ? 0x0D9488 : 0x1E40AF,
    transparent: true,
    opacity: 0.8
  });
  
  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);
  
  camera.position.z = 20;
  
  // Animation function
  function animate() {
    requestAnimationFrame(animate);
    
    shield.rotation.x += 0.003;
    shield.rotation.y += 0.005;
    
    particlesMesh.rotation.y += 0.001;
    
    // Make it responsive
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    
    renderer.render(scene, camera);
  }
  
  animate();
  
  // Handle resize
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
  
  // Theme change handler
  const themeObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        const isDark = document.documentElement.classList.contains('dark');
        shield.material.color.set(isDark ? 0x1E40AF : 0x0D9488);
        particlesMaterial.color.set(isDark ? 0x0D9488 : 0x1E40AF);
      }
    });
  });
  
  themeObserver.observe(document.documentElement, { attributes: true });
  
  return () => {
    // Cleanup
    renderer.dispose();
    themeObserver.disconnect();
    if (canvas.contains(renderer.domElement)) {
      canvas.removeChild(renderer.domElement);
    }
  };
};

// Create animated card using GSAP
export const animateCard = (element: HTMLElement) => {
  gsap.fromTo(element, 
    { 
      y: 20,
      opacity: 0
    }, 
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "elastic.out(1, 0.6)",
      delay: 0.3
    }
  );
};
