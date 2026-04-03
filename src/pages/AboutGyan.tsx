
import React from "react";
import Layout from "@/components/ui/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import SchemaData from "@/components/seo/SchemaData";
import { Youtube, Linkedin, Instagram, Brain, Code, TrendingUp, Users, Target, Lightbulb } from "lucide-react";


const AboutGyan = () => {
  const personSchema = {
    name: "Gyan Dwivedi",
    alternateName: "Gyanendra Dwivedi", 
    jobTitle: "Founder & CEO",
    worksFor: {
      "@type": "Organization",
      name: "Infridet Solutions Private Limited"
    },
    description: "Indian digital entrepreneur and founder of Infridet Solutions. Expert in web automation, SEO growth, and digital consulting. Trusted by influencers, educators, and content creators across India.",
    url: "https://infridetsolutions.com/about-gyan",
    sameAs: [
      "https://in.linkedin.com/in/gyanendradwivedi",
      "https://www.youtube.com/@Core-Gyan",
      "https://www.instagram.com/thegyanendradwivedi/"
    ]
  };

  const services = [
    {
      icon: Youtube,
      title: "YouTube SEO & Growth Strategy",
      description: "Helping creators scale their channels with data-driven optimization"
    },
    {
      icon: Brain,
      title: "SaaS & AI Automations", 
      description: "Building intelligent systems that streamline business operations"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack development with Next.js, PHP, MySQL, and Tailwind"
    },
    {
      icon: TrendingUp,
      title: "Brand Positioning",
      description: "Strategic positioning for digital creators and businesses"
    },
    {
      icon: Users,
      title: "Influencer Portfolio Management",
      description: "Managing high-level influencer and consultant portfolios"
    }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Who is Gyan Dwivedi? – Meet the Visionary Behind Infridet Solutions"
        description="Gyan Dwivedi is an Indian digital entrepreneur and founder of Infridet Solutions. Expert in web automation, SEO growth, and digital consulting. Trusted by influencers, educators, and content creators across India."
        keywords={["Who is Gyan Dwivedi", "Gyan Dwivedi Founder", "Gyan Infridet Solutions", "Digital Growth Expert India", "Gyanendra Dwivedi", "YouTube SEO expert"]}
        ogType="article"
      />
      
      <SchemaData type="Person" data={personSchema} />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 network-bg opacity-5 z-0"></div>
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                    Hi, I'm Gyan Dwivedi
                  </h1>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    I'm the founder and digital brain behind <strong>Infridet Solutions Private Limited</strong> – a company focused on helping creators, businesses, and entrepreneurs grow through high-quality web development, automation, and digital marketing services.
                  </p>
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href="https://in.linkedin.com/in/gyanendradwivedi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a 
                    href="https://www.youtube.com/@Core-Gyan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                  >
                    <Youtube size={24} />
                  </a>
                  <a 
                    href="https://www.instagram.com/thegyanendradwivedi/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src="/lovable-uploads/3a1238bf-43d7-4308-b873-3d789a424e88.png"
                    alt="Gyan Dwivedi - Founder of Infridet Solutions"
                    className="w-96 h-96 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                    <Brain className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What I Do Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                🧠 What I Do
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                I specialize in building digital ecosystems that drive real growth and results
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <service.icon className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why People Search For Me */}
        <section className="py-20 bg-gradient-to-r from-orange-50 to-orange-100">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                🏆 Why People Search for Me
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Whether it's helping scale YouTube channels, automating service workflows, or building full-stack platforms from scratch, people know me as a <strong>problem-solver and growth enabler</strong>.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I don't just build websites – <strong>I build digital ecosystems</strong> that transform how businesses operate and grow in the digital space.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <Lightbulb className="w-16 h-16 text-orange-500 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                💡 My Vision
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                At Infridet, my mission is to bring <strong>enterprise-level solutions</strong> to creators and businesses of all sizes. I believe in empowering India's digital talent pool with cutting-edge tech and zero-fluff strategies.
              </p>
              
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">🔍 For Search Snippets (SEO)</h3>
                <div className="space-y-2 text-left max-w-2xl mx-auto">
                  <p>• Gyan Dwivedi is an Indian digital entrepreneur and founder of Infridet Solutions.</p>
                  <p>• Expert in web automation, SEO growth, and digital consulting.</p>
                  <p>• Trusted by influencers, educators, and content creators across India.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Connect Section */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              📲 Let's Connect
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to transform your digital presence? Let's discuss how we can work together to achieve your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://in.linkedin.com/in/gyanendradwivedi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
              <a 
                href="https://www.youtube.com/@Core-Gyan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors"
              >
                <Youtube className="w-5 h-5 mr-2" />
                YouTube
              </a>
              <a 
                href="https://www.instagram.com/thegyanendradwivedi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-md transition-colors"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Instagram
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutGyan;
