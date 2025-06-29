import React, { useEffect, useRef, useState } from 'react';
import { Code, Layout, Rocket  } from 'lucide-react';

const About: React.FC = () => {
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

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Passionate about tackling complex challenges"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Skills",
      description: "Building dynamic web apps from frontend to backend"
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Responsive Design",
      description: "Crafting interfaces that adapt seamlessly across devices"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Growth Mindset",
      description: "Constantly learning and improving with feedback"
    },
  
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  I'm a Computer Science student at VIT Vellore, pursuing an Integrated M.Tech. I'm passionate about software development and emerging technologies, and eager to apply my skills to real-world projects.
                  
                </p>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                I have a strong foundation in Java and JavaScript, with hands-on experience in full-stack web development. I enjoy building both frontend and backend applications that are user-friendly and efficient.
                </p>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                "Beyond academics, I enjoy building real-world projects, exploring new technologies, and continuously improving my development skills. I'm currently looking for internship opportunities to gain industry experience and grow as a full-stack developer.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="relative z-10">
                  <img
                    src="./src\assests\Jaswanth.png"
                    alt="Pothuru Jaswanth - Computer Science Student"
                    className="w-full max-w-md mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-tr from-emerald-100 to-blue-100 rounded-2xl -z-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;