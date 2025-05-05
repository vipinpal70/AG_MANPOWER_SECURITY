import { useEffect, useRef } from "react";
import gsap from "gsap";
import { init3DAnimation } from "../lib/animation";

const HeroSection = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize 3D animation
    if (canvasRef.current) {
      init3DAnimation(canvasRef.current);
    }

    // GSAP animations for text elements
    const animateElements = document.querySelectorAll(".animate-element");

    gsap.fromTo(
      animateElements,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
      },
    );

    return () => {
      // Cleanup 3D animation if needed
    };
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex dark:bg-black items-center overflow-hidden pt-16"
    >
      {/* 3D Animation Canvas - ensure it stays behind content */}
      <div
        id="hero-canvas"
        ref={canvasRef}
        className="absolute inset-0 z-0"
      ></div>

      {/* Light overlay only to improve text readability without hiding animation */}
      <div className="absolute inset-0 bg-white dark:bg-gray-900 opacity-20 dark:opacity-40 z-1"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl">
          <div className="animate-element">
            <span className="inline-block py-1 px-3 rounded-full bg-secondary bg-opacity-20 dark:bg-opacity-30 text-black dark:text-white text-sm font-medium mb-4">
              {" "}
              Welcome to AG MANPOWER SERVICE
            </span>
          </div>
          <h1
            className="animate-element text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight text-primary dark:text-white mb-6"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.1)" }}
          >
            Securing Your <span className="text-secondary">Future</span> With
            Excellence
          </h1>
          <p
            className="animate-element text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-8 max-w-xl"
            style={{ textShadow: "0 1px 1px rgba(0,0,0,0.05)" }}
          >
            AG MANPOWER SERVICE, formerly known as AG Security Service, has been providing comprehensive security and facility management services with a dedicated team of professionals since 2016. Our rebranding reflects our expanded service offerings while maintaining our commitment to excellence in the security sector.
          </p>
          <div className="animate-element flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md text-base font-medium transition-colors duration-300"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="inline-block bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-primary dark:text-white border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-md text-base font-medium transition-colors duration-300"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="flex flex-col items-center text-xs text-gray-500 dark:text-gray-400"
        >
          <span>Scroll Down</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
