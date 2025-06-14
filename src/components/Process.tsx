
import React from 'react';

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "We begin by understanding your business objectives, current challenges, and technical requirements through comprehensive analysis and stakeholder interviews."
    },
    {
      number: "02",
      title: "Strategy & Planning",
      description: "Our experts develop a tailored strategy with detailed project roadmap, timeline, and resource allocation to ensure successful delivery."
    },
    {
      number: "03",
      title: "Design & Development",
      description: "Implementation phase where our skilled team brings your vision to life using best practices, agile methodologies, and cutting-edge technologies."
    },
    {
      number: "04",
      title: "Testing & Deployment",
      description: "Rigorous testing procedures ensure quality and reliability before seamless deployment and go-live support for your solution."
    },
    {
      number: "05",
      title: "Support & Optimization",
      description: "Ongoing maintenance, support, and continuous optimization to ensure your solution evolves with your business needs."
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-corporate">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A proven methodology that ensures successful project delivery and exceptional results for every client engagement.
          </p>
        </div>
        
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
          
          {steps.map((step, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} section-fade`}>
                <div className="bg-gray-50 p-8 rounded-xl card-hover">
                  <div className="text-4xl font-bold text-primary mb-4 font-corporate">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-corporate">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
