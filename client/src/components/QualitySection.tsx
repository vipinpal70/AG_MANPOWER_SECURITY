import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { pdcaSteps } from '../lib/data.js';

gsap.registerPlugin(ScrollTrigger);

const QualitySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const qualityCardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const scrollElements = sectionRef.current.querySelectorAll('[data-scroll]');
    
    // GSAP animations for scroll elements
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
    
    // GSAP animation for quality card
    if (qualityCardRef.current) {
      gsap.fromTo(qualityCardRef.current, 
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
    }
    
    return () => {
      // Cleanup scroll triggers to prevent memory leaks
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <section id="quality" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary bg-opacity-10 dark:bg-opacity-20 text-primary dark:text-secondary text-sm font-medium mb-4">Quality Policy</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4">Our Commitment to Excellence</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">We strive to fully satisfy our customers' needs and gain their confidence through high-quality services</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1" data-scroll>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold font-heading text-primary dark:text-secondary mb-3">Quality Management System</h3>
                <p className="text-gray-700 dark:text-gray-300">Our quality assurance system emphasizes planning and review, fostering personal attitudes of cooperation, teamwork, and a keen sensitivity to the continual improvement of our services through strict adherence to our Quality Management System (QMS).</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold font-heading text-primary dark:text-secondary mb-3">PDCA Approach</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">We use the PDCA (Plan-Do-Check-Act) paradigm for quality assurance management, ensuring continuous improvement and optimization of our services.</p>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {pdcaSteps.map((step, index) => (
                    <div key={index} className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-primary dark:text-secondary mb-2">{step.title}</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold font-heading text-primary dark:text-secondary mb-3">Quality Control Measures</h3>
                <p className="text-gray-700 dark:text-gray-300">Our quality control covers all activities from development, servicing, and documentation, introducing the rules: "fit for purpose" and "do it right the first time".</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2" data-scroll>
            <div className="relative">
              <div className="aspect-w-1 aspect-h-1 bg-gradient-to-br from-primary via-secondary to-accent opacity-90 dark:opacity-70 rounded-xl overflow-hidden">
                <div className="p-10 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    <div className="absolute inset-0 rounded-full border-4 border-white dark:border-gray-400 opacity-20"></div>
                    <div className="absolute inset-4 rounded-full border-4 border-white dark:border-gray-400 opacity-40"></div>
                    <div className="absolute inset-8 rounded-full border-4 border-white dark:border-gray-400 opacity-60"></div>
                    <div className="absolute inset-12 rounded-full border-4 border-white dark:border-gray-400 opacity-80"></div>
                    <div className="absolute inset-16 rounded-full border-4 border-white dark:border-gray-400"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="font-bold font-heading text-2xl mb-1">QUALITY</div>
                        <div className="text-sm font-medium">Our Core Value</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div ref={qualityCardRef} className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg max-w-xs" id="quality-card">
                <h4 className="font-bold text-primary dark:text-secondary mb-2">Customer Satisfaction</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">It is our ultimate goal to fully satisfy our customers' needs and to gain their confidence in us through high-quality services and continuous improvement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
