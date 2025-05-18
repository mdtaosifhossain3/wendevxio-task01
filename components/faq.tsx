import { useState } from "react";
import { Phone, ChevronRight, MessageSquare, PenLine } from "lucide-react";

export default function FAQPage() {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      id: "01",
      question: "What services does UX Recharge offer?",
      answer:
        "We specialize in designing and developing high-converting websites for SaaS companies.",
    },
    {
      id: "02",
      question: "Do you only work with SaaS companies?",
      answer:
        "While we specialize in SaaS companies, we also work with select businesses in other industries that align with our expertise in creating conversion-focused digital experiences.",
    },
    {
      id: "03",
      question: "How long does it take to build a SaaS website?",
      answer:
        "Our typical timeline for a comprehensive SaaS website is 6-8 weeks, depending on the complexity and scope of the project. We follow a structured process that includes discovery, design, development, and testing phases.",
    },
    {
      id: "04",
      question: "What tools do you use for development?",
      answer:
        "We use modern frameworks like React, Next.js, and Tailwind CSS for frontend development. For backend solutions, we leverage technologies like Node.js, Firebase, and various headless CMS options depending on client needs.",
    },
  ];

  const toggleFAQ = (id: any) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div id="faq" className=" font-sans">
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-10">
          <div className="text-sm text-blue-500 mb-2 text-center md:text-left">
            —FAQ
          </div>
          <div className="text-4xl font-bold flex flex-col items-center md:flex-row">
            <div>
              <span className="text-black">Got </span>
              <span className="text-blue-500 mx-2">question?</span>
            </div>
            <div>
              <span className="text-black">We've got </span>
              <span className="text-blue-500">answer.</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  expandedFAQ === faq.id ? "shadow-md" : "shadow-sm bg-white"
                }`}
              >
                <div
                  className="flex items-center justify-between p-6 cursor-pointer"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-2xl font-bold text-blue-600">
                      {faq.id}
                    </div>
                    <div className="font-medium text-lg">{faq.question}</div>
                  </div>
                  <div
                    className={`bg-gray-800 rounded-full p-2 transition-transform ${
                      expandedFAQ === faq.id ? "bg-blue-600" : ""
                    }`}
                  >
                    <ChevronRight size={20} className="text-white" />
                  </div>
                </div>
                {expandedFAQ === faq.id && (
                  <div className="px-6 pb-6 pt-0 ml-12">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="bg-blue-900 rounded-2xl p-8 text-white">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-700 rounded-full p-3">
                  <MessageSquare size={24} className="text-white" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center mb-2">
                You have different question?
              </h3>
              <p className="text-center text-blue-100 mb-8">
                Our team will answer all your question,
                <br />
                we ensure a quick response
              </p>

              <div className="flex justify-center">
                <button className="flex items-center gap-2 text-blue-900 bg-white rounded-lg px-4 py-2 font-medium">
                  <PenLine size={18} />
                  Contact Us
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="bg-blue-50 rounded-full p-3">
                  <Phone size={24} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">
                    Your comfort our priority
                  </p>
                  <h3 className="font-bold text-xl">24/7 Service</h3>
                  <p className="text-gray-600">+(000)000000000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
