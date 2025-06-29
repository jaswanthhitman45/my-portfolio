import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience: React.FC = () => {
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

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: [
        "Led a team of 5 developers in building scalable web applications serving 100K+ users",
        "Architected microservices using Node.js, React, and AWS, reducing response time by 40%",
        "Implemented CI/CD pipelines and improved deployment frequency by 300%",
        "Mentored junior developers and conducted technical interviews"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2020 - 2022",
      description: [
        "Developed responsive web applications from concept to deployment",
        "Built REST APIs and integrated third-party services for payment processing",
        "Collaborated closely with designers to implement pixel-perfect UI components",
        "Optimized application performance resulting in 50% faster load times"
      ],
      technologies: ["Vue.js", "Express.js", "MongoDB", "Stripe", "Firebase"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "Remote",
      period: "2019 - 2020",
      description: [
        "Created interactive websites for clients across various industries",
        "Implemented responsive designs and ensured cross-browser compatibility",
        "Worked with WordPress and custom CMS solutions",
        "Improved website performance scores by an average of 60%"
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "WordPress", "jQuery"]
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js"] },
    { category: "Backend", items: ["Node.js", "Express.js", "Python", "PostgreSQL", "MongoDB"] },
    { category: "Tools & Cloud", items: ["AWS", "Docker", "Git", "Jenkins", "Kubernetes"] },
    { category: "Design", items: ["Figma", "Adobe XD", "Responsive Design", "UI/UX", "Prototyping"] }
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Experience & Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>

          {/* Experience Timeline */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Professional Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h4>
                      <div className="flex items-center text-blue-600 mb-1">
                        <Building size={16} className="mr-2" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm mb-1">
                        <MapPin size={14} className="mr-2" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Calendar size={14} className="mr-2" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-600 flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div>
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
        </div>
      </div>
    </section>
  );
};

export default Experience;