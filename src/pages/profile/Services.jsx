import React, { useEffect, useRef } from 'react';
import { Code, Database, Bot, Cloud, Network } from 'lucide-react';
import Section from './Section';

const Services = () => {
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      const elements = servicesRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Code className="h-10 w-10 text-primary-500" />,
      title: 'Custom Software Development',
      description: 'Rapid MVP Prototyping, Web and Mobile Apps, API Integrations & Microservices, Cloud-native Development',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: <Database className="h-10 w-10 text-primary-500" />,
      title: 'SaaS Product Development',
      description: 'MVP to Enterprise SaaS Rollout, SSO & Payment Integrations, Built-in Analytics, AWS/GCP Cloud-Native Architecture',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: <Bot className="h-10 w-10 text-primary-500" />,
      title: 'AI & ML Engineering',
      description: 'Custom AI Agents, Predictive Analytics, LLM Fine-tuning, Multimodal AI Solutions',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: <Cloud className="h-10 w-10 text-primary-500" />,
      title: 'DevOps, Cloud & SRE',
      description: 'End-to-End CI/CD, Kubernetes Orchestration, Multi-Region Cloud Scaling, AWS/Azure/GCP Expertise',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: <Network className="h-10 w-10 text-primary-500" />,
      title: 'Microservices Architecture',
      description: 'Event-Driven Systems, API Gateway & Service Mesh, Secure Deployments, Monolith Migration',
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <Section 
      id="services" 
      className="relative py-20 overflow-hidden" 
      ref={servicesRef}
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-primary-900/90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 text-3xl md:text-4xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 text-lg text-gray-300">
            We replace scattered teams and misaligned timelines with a full-stack symphony that moves fast, builds smart, and scales right.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700"
              style={{ transitionDelay: `${300 + index * 50}ms` }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary-900/60 flex items-center justify-center">
                    <div className="transform scale-150 text-white">{service.icon}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-700 mt-16 text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-accent hover:bg-accent-dark text-primary-800 rounded-lg font-medium transition-all"
          >
            Launch Your Project Now
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Services;