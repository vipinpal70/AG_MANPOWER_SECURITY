import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle, XCircle } from "lucide-react";
import { trainingPrograms, dosList, dontsList } from '../lib/data.js';

gsap.registerPlugin(ScrollTrigger);

const TrainingSection = () => {
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
    <section id="training" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-accent bg-opacity-10 dark:bg-opacity-20 text-accent dark:text-accent text-sm font-medium mb-4">Training & Guidelines</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4">Personnel Development</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">We prioritize thorough training and clear guidelines to ensure service excellence</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div data-scroll>
            <h3 className="text-2xl font-bold font-heading text-primary dark:text-white mb-6">Training Programs</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">Being fully conscious of the necessity of training at all levels to ensure quality of services and client satisfaction, it is our organizational culture to pay optimum attention to our selection and training programs.</p>
            
            <div className="space-y-6 mt-8">
              {trainingPrograms.map((program, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`${program.bgColor} text-white p-3 rounded-full`}>
                    {React.createElement(program.icon, { className: program.iconClass })}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{program.title}</h4>
                    <p className="text-gray-700 dark:text-gray-300">{program.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div data-scroll>
            <h3 className="text-2xl font-bold font-heading text-primary dark:text-white mb-6">Personnel Guidelines</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">Clear guidelines help our personnel maintain professional standards and deliver exceptional service.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
                <h4 className="text-lg font-semibold text-primary dark:text-secondary mb-4">Do's</h4>
                <ul className="space-y-3">
                  {dosList.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
                <h4 className="text-lg font-semibold text-primary dark:text-secondary mb-4">Don'ts</h4>
                <ul className="space-y-3">
                  {dontsList.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
