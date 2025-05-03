import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from "lucide-react";
import { servicesData } from '../lib/data.js';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const scrollElements = sectionRef.current.querySelectorAll('[data-scroll]');

    scrollElements.forEach((el) => {
      gsap.fromTo(el,
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    return () => {
      // Cleanup scroll triggers to prevent memory leaks
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary bg-opacity-10 dark:bg-opacity-20 text-white dark:text-white text-sm font-medium mb-4">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4">Comprehensive Security & Facility Management</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">We offer a wide range of professional services to meet your security and facility management needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow" data-scroll>
              <div className={`h-48 ${service.gradientClass} flex items-center justify-center`}>
                {React.createElement(service.icon, { className: service.iconClass })}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading text-primary dark:text-white mb-2">{service.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start space-x-2">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="inline-block mt-6 text-secondary dark:text-[#d89f2c] font-medium hover:underline">Learn More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
