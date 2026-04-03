import React, { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/ui/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ChevronDown, 
  ChevronUp,
  HelpCircle
} from "lucide-react";
import { Link } from "react-router-dom";


interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
  delay: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen, delay }) => {
  return (
    <motion.div 
      className="glass-card mb-4 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <button
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      
      <div
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </motion.div>
  );
};

interface FAQCategoryProps {
  title: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

const FAQ = () => {
  const [openFAQs, setOpenFAQs] = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState<string>("General");

  const toggleFAQ = (key: string) => {
    setOpenFAQs(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const faqCategories: FAQCategoryProps[] = [
    {
      title: "General",
      faqs: [
        {
          question: "What services does INFRIDET SOLUTIONS PRIVATE LIMITED offer?",
          answer: "We offer a range of digital consulting services including YouTube channel growth, SEO optimization, brand development, digital marketing strategy, content creation, and community building. We also provide online courses in these areas to help you develop skills independently."
        },
        {
          question: "How can I get in touch with your team?",
          answer: "You can reach our team through various channels. Fill out the contact form on our Contact page, email us directly at contact@digitalnexus.com, or call us at +91 8853354829. We aim to respond to all inquiries within 24 business hours."
        },
        {
          question: "Do you work with clients internationally?",
          answer: "Yes, we work with clients globally. Our digital services can be delivered remotely, and our expertise in digital growth is applicable across markets. We've successfully worked with clients from the United States, United Kingdom, Australia, UAE, Singapore, and many other countries."
        },
        {
          question: "What makes INFRIDET SOLUTIONS different from other consulting agencies?",
          answer: "What sets us apart is our proven track record of results, our data-driven approach, and our specialized expertise in digital creator growth. We focus on sustainable, long-term strategies rather than quick fixes, and we provide measurable ROI for our clients."
        }
      ]
    },
    {
      title: "Services",
      faqs: [
        {
          question: "What does your YouTube consulting service include?",
          answer: "Our YouTube consulting includes channel audit, content strategy development, optimization of titles/descriptions/thumbnails, audience growth tactics, monetization strategies, algorithm insights, community building, and regular performance reviews. We tailor our approach based on your specific niche and goals."
        },
        {
          question: "How does your SEO optimization service work?",
          answer: "Our SEO service begins with a comprehensive audit of your current website and search presence. We then develop a custom strategy including keyword research, on-page optimization, technical SEO improvements, content creation guidance, and link building strategies. We provide regular reports on rankings, traffic, and conversions."
        },
        {
          question: "What results can I expect from your brand development services?",
          answer: "Our brand development services help create a distinctive, cohesive brand identity that resonates with your target audience. You can expect clearer brand positioning, consistent visual identity, stronger brand messaging, improved audience connection, and ultimately increased brand recognition and loyalty."
        },
        {
          question: "Do you offer one-time consultations or only ongoing services?",
          answer: "We offer both one-time consultations and ongoing services. One-time consultations are perfect for specific questions or challenges, while our ongoing services provide continuous support and strategy implementation. We'll recommend the best option based on your specific needs and goals."
        }
      ]
    },
    {
      title: "Courses",
      faqs: [
        {
          question: "How do I access the courses after purchase?",
          answer: "Once you've completed your purchase, you'll receive login credentials via email. These will give you access to our learning platform where you can immediately begin the course. All course materials, including videos, worksheets, and resources, will be available in your student dashboard."
        },
        {
          question: "Are there any prerequisites for taking your courses?",
          answer: "Most of our courses are designed to be accessible for beginners while also providing value to more experienced practitioners. Each course page specifies if any prior knowledge or tools are required. Our AI Money Mastery course assumes some basic understanding of investment concepts."
        },
        {
          question: "Do the courses have an expiration date?",
          answer: "No, once you purchase a course, you have lifetime access to the content, including any future updates we make to keep the material current. You can learn at your own pace without worrying about time limitations."
        },
        {
          question: "What is your refund policy for courses?",
          answer: "We offer a 14-day satisfaction guarantee for all our courses. If you're not completely satisfied with your purchase, contact our support team within 14 days for a full refund. We stand behind the quality of our education and want you to feel confident in your investment."
        }
      ]
    },
    {
      title: "Payment & Billing",
      faqs: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept various payment methods including credit/debit cards (Visa, MasterCard, American Express), UPI, net banking, and major wallets through our secure payment processors (Cashfree and Razorpay). For international clients, we also accept PayPal."
        },
        {
          question: "Is my payment information secure?",
          answer: "Yes, we take payment security very seriously. We do not store your credit card information on our servers. All payment processing is handled by secure, PCI-compliant payment gateways with industry-standard encryption protocols."
        },
        {
          question: "Do you offer payment plans for your services or courses?",
          answer: "Yes, for some of our premium services and higher-priced courses, we offer flexible payment plans. These details are available on the specific service or course pages. If you need a custom payment arrangement, please contact our team to discuss options."
        },
        {
          question: "Will I receive an invoice for my purchase?",
          answer: "Yes, you will automatically receive a detailed invoice for every purchase via email. The invoice includes all relevant information for your records, including GST details for Indian clients. If you need any modifications to your invoice, please contact our support team."
        }
      ]
    },
    {
      title: "Legal & Compliance",
      faqs: [
        {
          question: "Are your digital products and services GST-compliant?",
          answer: "Yes, all our products and services comply with Indian GST regulations. For Indian clients, we charge applicable GST and provide proper tax invoices with our GSTIN. International clients may be exempt from Indian GST, depending on their location and applicable laws."
        },
        {
          question: "What information do you collect from users?",
          answer: "We collect information necessary to provide our services, including contact details, payment information, and usage data. For complete information about our data collection and usage practices, please review our Privacy Policy."
        },
        {
          question: "How do you handle content rights for consultations and custom work?",
          answer: "For custom work we create for clients, the deliverables become the client's property upon full payment. For consultations, while we retain the rights to our methodologies and frameworks, clients are free to implement the specific advice and strategies we provide for their business."
        },
        {
          question: "What is your disclaimer regarding results from your services and courses?",
          answer: "While we provide expert guidance based on proven strategies and best practices, we cannot guarantee specific results as outcomes depend on many factors including implementation, market conditions, competition, and individual effort. Our courses and services are educational in nature, and results will vary."
        }
      ]
    }
  ];

  const currentCategory = faqCategories.find(category => category.title === activeCategory) || faqCategories[0];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 relative overflow-hidden bg-white">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-3xl md:text-4xl font-bold gradient-text mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Find answers to the most common questions about our services, courses, and policies.
            </motion.p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Category Sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-24">
                <motion.div 
                  className="glass-card p-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-800">
                    <HelpCircle size={20} className="mr-2 text-orange-500" />
                    Categories
                  </h2>
                  <div className="space-y-2">
                    {faqCategories.map((category, index) => (
                      <button
                        key={index}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          activeCategory === category.title
                            ? "bg-orange-100 text-orange-600"
                            : "hover:bg-gray-100 text-gray-700"
                        }`}
                        onClick={() => setActiveCategory(category.title)}
                      >
                        {category.title}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* FAQ Content */}
            <div className="lg:w-3/4">
              <motion.h2 
                className="text-2xl font-bold mb-6 text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {currentCategory.title} Questions
              </motion.h2>
              
              {currentCategory.faqs.map((faq, index) => (
                <FAQItem
                  key={`${activeCategory}-${index}`}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={!!openFAQs[`${activeCategory}-${index}`]}
                  toggleOpen={() => toggleFAQ(`${activeCategory}-${index}`)}
                  delay={0.1 * index}
                />
              ))}
            </div>
          </div>
          
          {/* Contact CTA */}
          <motion.div 
            className="glass-card p-8 mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              If you couldn't find the answer you were looking for, our team is ready to help. Reach out to us and we'll get back to you as soon as possible.
            </p>
            <Link to="/contact">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
