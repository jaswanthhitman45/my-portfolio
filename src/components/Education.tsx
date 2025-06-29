import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, GraduationCap, Award, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      degree: "Integrated M.Tech in Software Engineering — VIT Vellore",
      school: "VIT University, Vellore.",
      location: " Vellore, Tamil Nadu, India",
      period: "2023 - 2028 ",
      CGPA: "9.1/10.0",
      description: [
        "Relevant Coursework: Data Structures & Algorithms, Software Engineering, Database Systems",
        "Web Development, Object-Oriented Programming, Computer Networks",
        "Cloud Computing, Git & GitHub for version control"
      ]
    }
  ];

  const skills = [
    { 
      category: "Programming Languages", 
      items: ["Java", "JavaScript", "C++","C", "HTML/CSS"] 
    },
    { 
      category: "Frameworks & Libraries", 
      items: ["React", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap"] 
    },
    { 
      category: "Tools & Technologies", 
      items: ["Git", "VS Code", "MySQL", "MongoDB", "Figma"] 
    },
    { 
      category: "Concepts", 
      items: ["Data Structures",  "OOP", "Database Design", "REST APIs","Computer Networks"] 
    }
  ];

  const certifications = [
   
    {
      title: "Docker Training Course for the Absolute Beginner",
      issuer: "kodekloud",
      date: "2025",
      icon: <Award className="w-5 h-5" />
    }, {
      title: " Introduction to Modern AI",
      issuer: "Networking Academy",
      date: " 02 Apr 2025",
      icon: <Award className="w-5 h-5" />
    },
  
  ];

  return (
    <section ref={sectionRef} id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Education & Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>

          {/* Education */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Academic Background</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                      <div className="flex items-center text-blue-600 mb-1">
                        <GraduationCap size={16} className="mr-2" />
                        <span className="font-semibold">{edu.school}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm mb-1">
                        <MapPin size={14} className="mr-2" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm mb-2">
                        <Calendar size={14} className="mr-2" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="text-emerald-600 font-semibold">
                        CGPA: {edu.CGPA}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {edu.description.map((item, idx) => (
                      <li key={idx} className="text-gray-600 flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillSet, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <h4 className="font-bold text-gray-900 mb-4 text-center">{skillSet.category}</h4>
                  <div className="space-y-2">
                    {skillSet.items.map((skill, idx) => (
                      <div
                        key={idx}
                        className="text-center py-2 px-3 bg-gray-50 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-3">
                      {cert.icon}
                    </div>
                    <div className="text-sm text-gray-500">{cert.date}</div>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{cert.title}</h4>
                  <p className="text-gray-600 text-sm">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
