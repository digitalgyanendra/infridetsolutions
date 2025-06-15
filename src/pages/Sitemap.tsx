import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/ui/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import { FileText, Home, Info, Briefcase, FolderOpen, Phone, BookOpen, GraduationCap, Shield, Scale, HelpCircle, AlertTriangle, ExternalLink } from "lucide-react";

const Sitemap = () => {
  // Redirect search engines to the XML sitemap
  useEffect(() => {
    // Add canonical link to XML sitemap for search engines
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.type = 'application/rss+xml';
    link.href = '/sitemap.xml';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const siteStructure = [
    {
      category: "Main Pages",
      icon: Home,
      pages: [
        { title: "Home", url: "/", description: "Welcome to Infridet Solutions" },
        { title: "About Us", url: "/about", description: "Learn about our company and mission" },
        { title: "Services", url: "/services", description: "Digital marketing and growth services" },
        { title: "Portfolio", url: "/portfolio", description: "Our work and client success stories" },
        { title: "Contact", url: "/contact", description: "Get in touch with our team" },
      ]
    },
    {
      category: "Content & Resources",
      icon: BookOpen,
      pages: [
        { title: "Blog", url: "/blog", description: "Latest insights and digital marketing tips" },
        { title: "Courses", url: "/courses", description: "Educational courses and training programs" },
        { title: "YouTube Growth Course", url: "/courses/youtube-growth", description: "Comprehensive YouTube growth strategies" },
      ]
    },
    {
      category: "Legal & Support",
      icon: Shield,
      pages: [
        { title: "Privacy Policy", url: "/policy", description: "How we handle your data" },
        { title: "Terms & Conditions", url: "/terms", description: "Terms of service and usage" },
        { title: "Refund Policy", url: "/refund-policy", description: "Our refund and cancellation policy" },
        { title: "Disclaimer", url: "/disclaimer", description: "Legal disclaimers and limitations" },
        { title: "FAQ", url: "/faq", description: "Frequently asked questions" },
      ]
    },
    {
      category: "About Leadership",
      icon: Info,
      pages: [
        { title: "About Gyan Dwivedi", url: "/about-gyan", description: "Meet the founder and visionary behind Infridet Solutions" },
      ]
    }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Sitemap" 
        description="Complete sitemap and navigation structure of Infridet Solutions website. Find all pages, services, blog posts, and resources in one organized location."
        keywords={["sitemap", "website structure", "navigation", "Infridet Solutions", "pages", "content"]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Website Sitemap
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Navigate through all pages and resources available on Infridet Solutions. 
              Find everything from our services to educational content and legal information.
            </p>
            
            {/* XML Sitemap Notice for Search Engines */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto mb-8">
              <div className="flex items-center justify-center space-x-2 text-blue-800">
                <FileText className="w-5 h-5" />
                <span className="font-medium">For Search Engines:</span>
              </div>
              <p className="text-blue-700 text-sm mt-2">
                Looking for our XML sitemap? 
                <a 
                  href="/sitemap.xml" 
                  className="font-medium underline hover:text-blue-600 ml-1 inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Access XML Sitemap
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </p>
            </div>
          </div>

          <div className="grid gap-8">
            {siteStructure.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <section.icon className="w-8 h-8 text-orange-500 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-800">{section.category}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {section.pages.map((page, pageIndex) => (
                    <Link
                      key={pageIndex}
                      to={page.url}
                      className="group p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                            {page.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">{page.description}</p>
                          <p className="text-xs text-orange-500 mt-2 font-mono">{page.url}</p>
                        </div>
                        <FileText className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors ml-3" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-orange-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Need Help Finding Something?</h3>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our team is here to help guide you to the right resources.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-md transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Sitemap;
