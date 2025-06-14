import React, { useState } from 'react';

const Careers = () => {
  const [expandedPosition, setExpandedPosition] = useState<number | null>(null);

  const positions = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Join our engineering team to build scalable solutions and work with cutting-edge technologies.",
      details: {
        responsibilities: [
          "Design and develop high-quality software solutions using modern technologies",
          "Collaborate with cross-functional teams to deliver exceptional user experiences",
          "Mentor junior developers and contribute to technical architecture decisions",
          "Participate in code reviews and maintain high coding standards"
        ],
        requirements: [
          "5+ years of experience in software development",
          "Proficiency in React, TypeScript, and Node.js",
          "Experience with cloud platforms (AWS, Azure, or GCP)",
          "Strong problem-solving skills and attention to detail"
        ],
        benefits: [
          "Competitive salary and equity package",
          "Flexible working hours and remote work options",
          "Professional development budget",
          "Health, dental, and vision insurance"
        ]
      }
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "New York, NY",
      type: "Full-time",
      description: "Lead cross-functional teams and drive successful project delivery for our enterprise clients.",
      details: {
        responsibilities: [
          "Manage end-to-end project lifecycle for enterprise client engagements",
          "Coordinate with stakeholders to define project scope and deliverables",
          "Monitor project progress and ensure timely delivery within budget",
          "Facilitate communication between technical teams and clients"
        ],
        requirements: [
          "3+ years of project management experience in technology projects",
          "PMP or Agile certification preferred",
          "Excellent communication and leadership skills",
          "Experience with project management tools (Jira, Asana, etc.)"
        ],
        benefits: [
          "Competitive salary with performance bonuses",
          "Comprehensive healthcare coverage",
          "Professional certification reimbursement",
          "Flexible PTO policy"
        ]
      }
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Create intuitive and engaging user experiences for our digital products and client solutions.",
      details: {
        responsibilities: [
          "Design user-centered interfaces for web and mobile applications",
          "Conduct user research and usability testing",
          "Create wireframes, prototypes, and high-fidelity designs",
          "Collaborate with developers to ensure design implementation"
        ],
        requirements: [
          "3+ years of UX/UI design experience",
          "Proficiency in Figma, Sketch, or Adobe Creative Suite",
          "Strong portfolio demonstrating design thinking process",
          "Understanding of front-end development principles"
        ],
        benefits: [
          "Creative freedom and ownership of design projects",
          "Access to latest design tools and software",
          "Conference and workshop attendance opportunities",
          "Remote work with flexible schedule"
        ]
      }
    },
    {
      title: "Business Analyst",
      department: "Strategy",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Analyze business requirements and bridge the gap between technical teams and stakeholders.",
      details: {
        responsibilities: [
          "Gather and analyze business requirements from stakeholders",
          "Create detailed functional specifications and user stories",
          "Facilitate workshops and requirement gathering sessions",
          "Support UAT and change management processes"
        ],
        requirements: [
          "2+ years of business analysis experience",
          "Strong analytical and problem-solving skills",
          "Experience with requirement management tools",
          "Excellent written and verbal communication skills"
        ],
        benefits: [
          "Opportunity to work with diverse industry clients",
          "Professional development and training programs",
          "Collaborative and innovative work environment",
          "Comprehensive benefits package"
        ]
      }
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedPosition(expandedPosition === index ? null : index);
  };

  return (
    <section id="careers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-corporate">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Be part of a dynamic team that's shaping the future of technology. We offer competitive benefits, growth opportunities, and a collaborative work environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-start">
          {positions.map((position, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg card-hover section-fade">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900 font-corporate">
                  {position.title}
                </h3>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {position.type}
                </span>
              </div>
              <div className="text-sm text-gray-500 mb-2">
                {position.department} • {position.location}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {position.description}
              </p>
              <button 
                onClick={() => toggleExpanded(index)}
                className="text-primary font-semibold hover:text-primary/80 transition-colors duration-200"
              >
                {expandedPosition === index ? 'Show Less ↑' : 'Learn More →'}
              </button>
              
              {expandedPosition === index && (
                <div className="mt-6 pt-6 border-t border-gray-200 space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {position.details.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start text-sm text-gray-600">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.details.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-sm text-gray-600">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What We Offer:</h4>
                    <ul className="space-y-2">
                      {position.details.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-sm text-gray-600">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4">
                    <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200">
                      Apply Now
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center section-fade">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-corporate">
              Why Choose YellowChip?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl mb-4">🚀</div>
                <h4 className="font-semibold text-gray-900 mb-2">Innovation First</h4>
                <p className="text-gray-600 text-sm">Work with cutting-edge technologies and innovative solutions</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4">🌱</div>
                <h4 className="font-semibold text-gray-900 mb-2">Growth Opportunities</h4>
                <p className="text-gray-600 text-sm">Continuous learning and career advancement programs</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4">⚖️</div>
                <h4 className="font-semibold text-gray-900 mb-2">Work-Life Balance</h4>
                <p className="text-gray-600 text-sm">Flexible schedules and comprehensive benefits package</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
