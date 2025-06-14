
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-corporate">
            About YellowChip
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded on the principles of innovation, excellence, and client success, YellowChip has been at the forefront of technological advancement for over a decade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="section-fade">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="YellowChip Team" 
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
          </div>
          
          <div className="section-fade">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-corporate">
              Our Mission & Vision
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We believe in transforming businesses through strategic technology implementation. Our team of experts combines deep industry knowledge with cutting-edge technical expertise to deliver solutions that not only meet today's challenges but anticipate tomorrow's opportunities.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              From startups to Fortune 500 companies, we've helped organizations across various industries achieve their digital transformation goals while maintaining the highest standards of quality and security.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h4>
                <p className="text-gray-600 text-sm">Cutting-edge solutions for modern challenges</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h4>
                <p className="text-gray-600 text-sm">Uncompromising quality in every project</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Partnership</h4>
                <p className="text-gray-600 text-sm">Long-term relationships built on trust</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Results</h4>
                <p className="text-gray-600 text-sm">Measurable outcomes that drive growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
