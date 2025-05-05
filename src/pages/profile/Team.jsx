import React, { useEffect, useRef } from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import Section from './Section';

const Team = () => {
  const teamRef = useRef(null);

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

    if (teamRef.current) {
      const elements = teamRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'CEO & AI Architect',
      bio: '10+ years of experience in AI research and software development. Former lead at DeepMind.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'alex@vaccel.tech'
      }
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO & ML Engineer',
      bio: 'PhD in Machine Learning with expertise in NLP and computer vision systems.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@vaccel.tech'
      }
    },
    {
      name: 'Rajiv Patel',
      role: 'Lead Data Scientist',
      bio: 'Specialized in predictive analytics and large-scale data processing systems.',
      image: 'https://images.pexels.com/photos/2896853/pexels-photo-2896853.jpeg?auto=compress&cs=tinysrgb&w=600',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'rajiv@vaccel.tech'
      }
    },
    {
      name: 'Emma Zhang',
      role: 'UX/UI Designer',
      bio: 'Creates intuitive interfaces for complex AI systems with focus on accessibility.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emma@vaccel.tech'
      }
    }
  ];

  return (
    <Section id="team" className="bg-white py-20" ref={teamRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 text-lg text-gray-600">
            Our diverse team of experts combines deep technical knowledge with industry experience to deliver exceptional AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-center space-x-3">
                      <a href={member.social.linkedin} className="bg-white/90 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors">
                        <Linkedin size={18} />
                      </a>
                      <a href={member.social.twitter} className="bg-white/90 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors">
                        <Twitter size={18} />
                      </a>
                      <a href={`mailto:${member.social.email}`} className="bg-white/90 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors">
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-indigo-600 mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-700 mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">Join Our Team</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals passionate about AI and innovation. Check out our current openings or send your resume.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-full font-medium transition-all"
          >
            View Careers
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Team;