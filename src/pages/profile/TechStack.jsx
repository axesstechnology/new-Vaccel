import React, { useEffect, useRef } from 'react';
import Section from './Section';

const TechStack = () => {
  const techStackRef = useRef(null);

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

    if (techStackRef.current) {
      const elements = techStackRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const techStacks = [
    {
      title: 'Custom Software Development',
      subtitle: 'Revolutionize Your Operations: Transform with Software Tailored to Your Needs.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1920',
      categories: [
        {
          name: 'Frontend',
          items: ['React.js', 'Next.js', 'TailwindCSS']
        },
        {
          name: 'Backend',
          items: ['Node.js', 'Express.js', 'NestJS']
        },
        {
          name: 'Mobile Apps',
          items: ['Flutter', 'React Native']
        },
        {
          name: 'APIs',
          items: ['REST', 'GraphQL']
        },
        {
          name: 'Database',
          items: ['MongoDB', 'PostgreSQL', 'MySQL']
        },
        {
          name: 'Cloud',
          items: ['AWS', 'Azure']
        },
        {
          name: 'Authentication',
          items: ['JWT', 'OAuth2']
        },
        {
          name: 'Hosting',
          items: ['Vercel', 'AWS Elastic Beanstalk']
        }
      ]
    },
    {
      title: 'SaaS Product Development',
      subtitle: 'Shield Your Software: Bulletproof Testing for a Flawless User Experience',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920',
      categories: [
        {
          name: 'Web Framework',
          items: ['Next.js (Fullstack)', 'MERN Stack']
        },
        {
          name: 'Billing & Payments',
          items: ['Stripe', 'Razorpay.js', 'PayPal APIs']
        },
        {
          name: 'Authentication/SSO',
          items: ['Auth0', 'Firebase Auth', 'Keycloak']
        },
        {
          name: 'Backend APIs',
          items: ['REST', 'GraphQL']
        },
        {
          name: 'Database',
          items: ['MongoDB Atlas', 'PostgreSQL']
        },
        {
          name: 'Multi-Tenancy',
          items: ['MongoDB Partitioning', 'AWS RDS']
        },
        {
          name: 'Deployment/Hosting',
          items: ['AWS EC2', 'AWS Lambda', 'Vercel', 'Render']
        },
        {
          name: 'Storage & File Uploads',
          items: ['AWS S3', 'Cloudinary']
        }
      ]
    },
    {
      title: 'AI & ML Engineering',
      subtitle: 'Crafting Websites that Captivate and Convert',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920',
      categories: [
        {
          name: 'LLMs & Generative AI',
          items: ['OpenAI', 'Anthropic', 'HuggingFace Transformers']
        },
        {
          name: 'Fine-Tuning Models',
          items: ['LoRA', 'QLoRA', 'HuggingFace']
        },
        {
          name: 'Prompt Engineering',
          items: ['LangChain', 'LlamaIndex']
        },
        {
          name: 'Vector Database',
          items: ['Pinecone', 'Weaviate', 'FAISS']
        },
        {
          name: 'Computer Vision',
          items: ['TensorFlow', 'PyTorch', 'OpenCV']
        },
        {
          name: 'NLP',
          items: ['spaCy', 'HuggingFace', 'NLTK']
        },
        {
          name: 'Deployment',
          items: ['ONNX', 'TensorRT', 'AWS SageMaker']
        },
        {
          name: 'Chatbots',
          items: ['RASA', 'Dialogflow', 'LangChain Agents']
        },
        {
          name: 'AI API Integration',
          items: ['Azure OpenAI', 'OpenAI GPT-4', 'Claude 3']
        }
      ]
    },
    {
      title: 'DevOps & Cloud Engineering',
      subtitle: 'V-Accel Digital Marketing: Ignite Your Brand and Dominate the Digital Landscape.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1920',
      categories: [
        {
          name: 'CI/CD Pipelines',
          items: ['GitHub Actions', 'GitLab CI', 'Jenkins']
        },
        {
          name: 'Containerization',
          items: ['Docker', 'Kubernetes (EKS, AKS)']
        },
        {
          name: 'Infrastructure as Code',
          items: ['Terraform', 'Pulumi']
        },
        {
          name: 'Monitoring',
          items: ['Prometheus', 'Grafana', 'Datadog', 'NewRelic']
        },
        {
          name: 'Cloud Providers',
          items: ['AWS', 'Azure', 'GCP']
        },
        {
          name: 'Serverless Computing',
          items: ['AWS Lambda', 'Azure Functions']
        },
        {
          name: 'Secrets Management',
          items: ['HashiCorp Vault', 'AWS Secrets Manager']
        },
        {
          name: 'Log Management',
          items: ['ELK Stack (Elasticsearch, Logstash, Kibana)']
        }
      ]
    },
    {
      title: 'Microservices Architecture',
      subtitle: 'Crafting Websites that Captivate and Convert',
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1920',
      categories: [
        {
          name: 'Service Development',
          items: ['Node.js (Express, NestJS)', 'GoLang']
        },
        {
          name: 'API Gateway',
          items: ['Kong Gateway', 'AWS API Gateway']
        },
        {
          name: 'Service Mesh',
          items: ['Istio', 'Linkerd']
        },
        {
          name: 'Messaging/Event Bus',
          items: ['Kafka', 'RabbitMQ']
        },
        {
          name: 'Databases per Service',
          items: ['MongoDB', 'PostgreSQL', 'DynamoDB']
        },
        {
          name: 'Monitoring/Tracing',
          items: ['Zipkin', 'Jaeger']
        },
        {
          name: 'Container Orchestration',
          items: ['Kubernetes (EKS, AKS)']
        },
        {
          name: 'Resilience Patterns',
          items: ['Netflix OSS (Hystrix)', 'Istio']
        },
        {
          name: 'API Security',
          items: ['OAuth2', 'mTLS', 'OpenID Connect']
        }
      ]
    }
  ];

  return (
    <Section id="tech-stack" className="bg-accent" ref={techStackRef}>
      {techStacks.map((stack, stackIndex) => (
        <div 
          key={stackIndex} 
          className="relative mb-20 last:mb-0"
          style={{
            backgroundImage: `url(${stack.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="bg-white/90 backdrop-blur-sm py-6 px-8 rounded-xl inline-block mb-8 transform -rotate-2">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-700">
                  {stack.title}
                </h2>
              </div>
              <p className="text-xl text-white mb-12">{stack.subtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {stack.categories.map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700"
                  style={{ transitionDelay: `${300 + categoryIndex * 50}ms` }}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary-100 hover:transform hover:-translate-y-1 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-primary-700 mb-4">{category.name}</h3>
                    <div className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                          <span className="text-primary-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-accent" />
        </div>
      ))}
    </Section>
  );
};

export default TechStack;