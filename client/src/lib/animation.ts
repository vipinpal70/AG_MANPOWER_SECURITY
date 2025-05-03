import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Setup scroll animations for all elements with data-scroll attribute
export const setupScrollAnimation = () => {
  const scrollElements = document.querySelectorAll("[data-scroll]");

  function elementInView(el: Element) {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= window.innerHeight * 0.8;
  }

  function displayScrollElement(element: Element) {
    element.classList.add("in-view");
  }

  function hideScrollElement(element: Element) {
    element.classList.remove("in-view");
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
  scrollElements.forEach((el) => {
    el.classList.add("transform", "translate-y-6");
  });

  // Initial check for elements in view
  setTimeout(handleScrollAnimation, 100);

  // Listen for scroll events
  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });
};

// // Initialize 3D animation for hero section
// export const init3DAnimation = (canvas: HTMLElement) => {
//   // Initialize Three.js
//   const scene = new THREE.Scene();
//   const camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000,
//   );

//   const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   renderer.setPixelRatio(window.devicePixelRatio);
//   canvas.appendChild(renderer.domElement);

//   // Add ambient light
//   const ambientLight = new THREE.AmbientLight(0x404040, 2);
//   scene.add(ambientLight);

//   // Add directional light
//   const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//   directionalLight.position.set(1, 1, 1);
//   scene.add(directionalLight);

//   // Check theme for color
//   const isDarkMode = document.documentElement.classList.contains("dark");

//   // Create a smaller shield geometry to represent security - reduced size from 5 to 3
//   const shieldGeometry = new THREE.IcosahedronGeometry(5, 1);
//   const material = new THREE.MeshPhongMaterial({
//     color: isDarkMode ? 0xff0000 : 0xf89c2e,
//     wireframe: true,
//     transparent: true,
//     opacity: isDarkMode ? 1 : 0.1,
//     side: THREE.DoubleSide,
//   });

//   const shield = new THREE.Mesh(shieldGeometry, material);
//   scene.add(shield);

//   // Create points for a particle effect
//   const particlesGeometry = new THREE.BufferGeometry();
//   const particlesCount = 2000;

//   const posArray = new Float32Array(particlesCount * 3);
//   for (let i = 0; i < particlesCount * 3; i++) {
//     // Reduced particle spread from 50 to 30 to match smaller shield
//     posArray[i] = (Math.random() - 0.5) * 40;
//   }

//   particlesGeometry.setAttribute(
//     "position",
//     new THREE.BufferAttribute(posArray, 3),
//   );

//   const particlesMaterial = new THREE.PointsMaterial({
//     size: 0.1,
//     color: isDarkMode ? 0x0d9488 : 0xff0000,
//     transparent: true,
//     opacity: 0.9,
//   });

//   const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
//   scene.add(particlesMesh);

//   // Adjusted camera position to better frame the smaller shield
//   camera.position.z = 12;

//   // Position the shield slightly to the right for mobile view
//   shield.position.x = window.innerWidth < 768 ? 3 : 1;

//   // Animation function - slower for better performance on mobile
//   function animate() {
//     requestAnimationFrame(animate);

//     // Slower rotation for better performance, especially on mobile
//     shield.rotation.x += 0.002;
//     shield.rotation.y += 0.003;

//     particlesMesh.rotation.y += 0.0005;

//     // Make it responsive but only update dimensions when actually needed
//     const width = window.innerWidth;
//     const height = window.innerHeight;

//     if (
//       renderer.domElement.width !== width ||
//       renderer.domElement.height !== height
//     ) {
//       renderer.setSize(width, height);
//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//     }

//     renderer.render(scene, camera);
//   }

//   animate();

//   // Handle resize
//   window.addEventListener("resize", () => {
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();

//     // Update shield position on resize for responsive design
//     shield.position.x = window.innerWidth < 768 ? 3 : 1;
//   });

//   // Theme change handler
//   const themeObserver = new MutationObserver((mutations) => {
//     mutations.forEach((mutation) => {
//       if (mutation.attributeName === "class") {
//         const isDark = document.documentElement.classList.contains("dark");
//         shield.material.color.set(isDark ? 0x1e40af : 0x0d9488);
//         particlesMaterial.color.set(isDark ? 0x0d9488 : 0x1e40af);
//       }
//     });
//   });

//   themeObserver.observe(document.documentElement, { attributes: true });

//   return () => {
//     // Cleanup
//     renderer.dispose();
//     themeObserver.disconnect();
//     if (canvas.contains(renderer.domElement)) {
//       canvas.removeChild(renderer.domElement);
//     }
//   };
// };

export const init3DAnimation = (canvas: HTMLElement) => {
  // === Init scene ===
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  canvas.appendChild(renderer.domElement);

  // === Lighting ===
  const ambientLight = new THREE.AmbientLight(0x404040, 2);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);

  // === Theme-based color logic ===
  const getThemeColors = () => {
    const isDark = document.documentElement.classList.contains("dark");
    return {
      isDarkMode: isDark,
      shieldColor: isDark ? 0xfab057 : 0xf89c2e, // Warm amber in dark, orange in light
      particleColor: isDark ? 0x0d9488 : 0x1e40af, // Teal in dark, blue in light
      shieldOpacity: isDark ? 1 : 0.1,
    };
  };

  let { isDarkMode, shieldColor, particleColor, shieldOpacity } =
    getThemeColors();

  // === Shield geometry ===
  const shieldGeometry = new THREE.IcosahedronGeometry(5, 1);
  const material = new THREE.MeshPhongMaterial({
    color: shieldColor,
    wireframe: true,
    transparent: true,
    opacity: shieldOpacity,
    side: THREE.DoubleSide,
  });

  const shield = new THREE.Mesh(shieldGeometry, material);
  scene.add(shield);

  // === Particles ===
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 2000;
  const posArray = new Float32Array(particlesCount * 3);
  for (let i = 0; i < posArray.length; i++) {
    posArray[i] = (Math.random() - 0.5) * 40;
  }

  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(posArray, 3),
  );

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.1,
    color: particleColor,
    transparent: true,
    opacity: 0.9,
  });

  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);

  // === Camera position ===
  camera.position.z = 12;
  shield.position.x = window.innerWidth < 768 ? 3 : 1;

  // === Animate loop ===
  function animate() {
    requestAnimationFrame(animate);
    shield.rotation.x += 0.002;
    shield.rotation.y += 0.003;
    particlesMesh.rotation.y += 0.0005;

    const width = window.innerWidth;
    const height = window.innerHeight;

    if (
      renderer.domElement.width !== width ||
      renderer.domElement.height !== height
    ) {
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);
  }
  animate();

  // === Responsive shield position ===
  window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    shield.position.x = window.innerWidth < 768 ? 3 : 1;
  });

  // === Theme change listener ===
  const themeObserver = new MutationObserver(() => {
    const { shieldColor, particleColor, shieldOpacity } = getThemeColors();
    shield.material.color.set(shieldColor);
    shield.material.opacity = shieldOpacity;
    particlesMaterial.color.set(particleColor);
  });

  themeObserver.observe(document.documentElement, { attributes: true });

  return () => {
    renderer.dispose();
    themeObserver.disconnect();
    if (canvas.contains(renderer.domElement)) {
      canvas.removeChild(renderer.domElement);
    }
  };
};

// Create animated card using GSAP
export const animateCard = (element: HTMLElement) => {
  gsap.fromTo(
    element,
    {
      y: 20,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "elastic.out(1, 0.6)",
      delay: 0.3,
    },
  );
};
