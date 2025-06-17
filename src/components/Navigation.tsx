import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = ['home', 'about', 'services', 'process', 'careers', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  const getLinkClasses = (section: string) => {
    const baseClasses = "transition-colors duration-300 font-medium";
    const activeClasses = "text-green-600 font-semibold";
    const inactiveClasses = "text-gray-700 hover:text-primary";
    
    return `${baseClasses} ${activeSection === section ? activeClasses : inactiveClasses}`;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center space-x-3">
            <img 
              src="./lovable-uploads/405966e3-3a19-4dee-81b4-2ee11eda1ce0.png" 
              alt="YellowChip Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-gray-900 font-corporate">
              YellowChip
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('home')} className={getLinkClasses('home')}>
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className={getLinkClasses('about')}>
                About Us
              </button>
              <button onClick={() => scrollToSection('services')} className={getLinkClasses('services')}>
                Services
              </button>
              <button onClick={() => scrollToSection('process')} className={getLinkClasses('process')}>
                Our Process
              </button>
              <button onClick={() => scrollToSection('careers')} className={getLinkClasses('careers')}>
                Careers
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="px-6 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all duration-300 font-medium"
              >
                Contact Us
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-primary transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('home')} className={`block px-3 py-2 w-full text-left ${getLinkClasses('home')}`}>
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className={`block px-3 py-2 w-full text-left ${getLinkClasses('about')}`}>
              About Us
            </button>
            <button onClick={() => scrollToSection('services')} className={`block px-3 py-2 w-full text-left ${getLinkClasses('services')}`}>
              Services
            </button>
            <button onClick={() => scrollToSection('process')} className={`block px-3 py-2 w-full text-left ${getLinkClasses('process')}`}>
              Our Process
            </button>
            <button onClick={() => scrollToSection('careers')} className={`block px-3 py-2 w-full text-left ${getLinkClasses('careers')}`}>
              Careers
            </button>
            <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 rounded-lg mx-3 text-center font-medium bg-primary text-white hover:bg-primary/90 transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
