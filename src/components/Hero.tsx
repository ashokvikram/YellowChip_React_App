
import React from 'react';
import { ArrowDown, Code, Database, Shield, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Technology Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-20 h-20 border border-primary/30 rounded-lg rotate-12"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-primary/20 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 border border-primary/25 rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 right-10 w-18 h-18 border border-primary/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-primary/15 rounded-lg"></div>
        <div className="absolute top-1/3 right-1/3 w-14 h-14 border border-primary/20 rounded-full"></div>
      </div>

      {/* Professional IT Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/YellowChip_React_App/lovable-uploads/Hero_1.png" 
          alt="Professional workspace with glasses and laptop" 
          className="w-full h-full object-cover opacity-90"
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/5"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-10 mt-12 text-center relative left-4 z-15">
        <div>
          {/* Add semi-transparent background for better text contrast */}
          <div className="bg-white/0  rounded-2xl p-8 mb-2 shadow-lg">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-white mb-6 font-corporate">
              Innovating the Future of Technology
               <span className="block text-primary mt-2"></span> 
            </h1>           
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering businesses with cutting-edge solutions, strategic insights, and exceptional service delivery that drives measurable results.
            </p>
          </div>
          {/* Technology Icons - Enhanced visibility */}
        
          
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Our Solutions
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started Today
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-lg p-6 border border-gray-200 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 animate-counter">500+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-lg p-6 border border-gray-200 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 animate-counter">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-lg p-6 border border-gray-200 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 animate-counter">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 hover:text-primary transition-colors duration-200 animate-bounce bg-white/90 backdrop-blur-sm rounded-full p-3 border border-gray-200 shadow-lg"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;
