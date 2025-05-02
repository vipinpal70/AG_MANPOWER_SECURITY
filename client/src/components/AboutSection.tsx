import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { clientsServed, registrationDetails, manpowerList } from '../lib/data';
import { Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
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
    <section id="about" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary bg-opacity-10 dark:bg-opacity-20 text-primary dark:text-secondary text-sm font-medium mb-4">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4">Leading Facility Management Company</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">Delivering quality and innovative services since 2016</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="about-image-wrapper overflow-hidden rounded-xl shadow-lg" data-scroll>
            <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-primary to-secondary opacity-90 dark:opacity-70 rounded-xl">
              <div className="flex items-center justify-center h-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="space-y-6" data-scroll>
            <p className="text-gray-700 dark:text-gray-300">We are one of the leading Facility Management Companies, delivering quality services with innovative methods. We have a team of highly dedicated personnel and field workers with a core competency in providing a wide range of facility management services.</p>
            
            <h3 className="text-xl font-bold font-heading text-primary dark:text-secondary">We Serve</h3>
            <div className="grid grid-cols-2 gap-4">
              {clientsServed.map((client, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-secondary" />
                  <span>{client}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <h3 className="text-xl font-bold font-heading text-primary dark:text-secondary mb-4">Registrations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {registrationDetails.map((reg, index) => (
                  <div key={index} className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-sm text-gray-500 dark:text-gray-400 mb-1">{reg.title}</h4>
                    <p className="font-semibold">{reg.number}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-10 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold font-heading text-center text-gray-900 dark:text-white mb-10">Our Strength</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md" data-scroll>
              <div className="mb-4 text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold font-heading text-primary dark:text-white mb-2">Efficient Management</h4>
              <p className="text-gray-700 dark:text-gray-300">Our services are supported by efficient management and our Supervisors are put through specialized training in their respective jobs, ensuring systematic approach with minimum disturbances.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md" data-scroll>
              <div className="mb-4 text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold font-heading text-primary dark:text-white mb-2">Careful Personnel Selection</h4>
              <p className="text-gray-700 dark:text-gray-300">To achieve high quality results, our personnel are carefully selected keeping in view specific client requirements. They are provided with neat and clean uniforms with proper name plates and identity cards.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold font-heading text-center text-gray-900 dark:text-white mb-10">Our Manpower</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4" data-scroll>
            {manpowerList.map((role, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto mb-2 text-primary dark:text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="font-medium text-sm">{role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
