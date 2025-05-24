import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faUser,
  faClock,
  faChevronDown,
  faChevronUp,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";

const QAContact: React.FC = () => {
  const { t } = useTranslation();
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const faqs = [
    {
      question: t("ques1_QA"),
      answer: t("answer1"),
    },
    {
      question: t("ques2_QA"),
      answer: t("answer2"),
    },
    {
      question: t("ques3_QA"),
      answer: t("answer3"),
    },
    {
      question: t("ques4_QA"),
      answer: t("answer4"),
    },
    {
      question: t("ques5_QA"),
      answer: t("answer5"),
    },
    {
      question: t("ques6_QA"),
      answer: t("answer6"),
    },
    {
      question: t("ques7_QA"),
      answer: t("answer7"),
    },
  ];

  const handleFAQToggle = (index: number): void => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Contact
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed">
            Pure love is amazing essence of each human which the more we give it
            to others, the happier we feel.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* FAQ Section */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => handleFAQToggle(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="font-medium text-gray-800 pr-4">
                      {faq.question}
                    </span>
                    <FontAwesomeIcon
                      icon={expandedFAQ === index ? faChevronUp : faChevronDown}
                      className="text-emerald-600 flex-shrink-0"
                    />
                  </button>

                  {expandedFAQ === index && (
                    <div className="px-6 pb-4">
                      <div className="pt-2 border-t border-gray-100">
                        <p
                          className="text-gray-600 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: faq.answer }}
                        ></p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Q&A Visual Section */}
          <div className="space-y-8">
            {/* Any Question Section */}
            <div className="text-center">
              <div className="mb-6">
                <img
                  src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=300&h=250&fit=crop"
                  alt="Q&A Illustration"
                  className="mx-auto rounded-lg shadow-lg"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                {t("anyquestion_QA")}
              </h3>

              <blockquote className="text-gray-600 italic mb-6 text-lg leading-relaxed">
                "{t("quote_QA")}"
              </blockquote>

              <button
                onClick={() =>
                  document
                    .getElementById("contact-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-200 font-medium"
              >
                MAIL YOUR QUESTION
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name *"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email *"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject *"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Message *"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-vertical"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors duration-200 font-semibold flex items-center justify-center space-x-2"
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Contact Info
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Company name:
                      </h4>
                      <p className="text-gray-600">{t("name_QA")}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Address:</h4>
                      <p className="text-gray-600">{t("companyAddress_QA")}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {t("represent_QA")}
                      </h4>
                      <p className="text-gray-600">Dinh Thi Dong Phuong</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {t("number_QA")}
                      </h4>
                      <p className="text-gray-600">0962 414 125</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {t("email_QA")}
                      </h4>
                      <p className="text-gray-600">dinhdongphuong@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Charity Image */}
              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&h=300&fit=crop"
                  alt="Charity Jar"
                  className="mx-auto rounded-lg shadow-lg"
                />
                <div className="mt-4 p-4 bg-emerald-50 rounded-lg">
                  <h4 className="font-bold text-emerald-700 mb-2">
                    Support Our Mission
                  </h4>
                  <p className="text-sm text-emerald-600">
                    Every contribution makes a difference in the lives of those
                    we serve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Methods */}
      <section className="py-12 sm:py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-lg opacity-90">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-emerald-500 rounded-lg hover:bg-emerald-400 transition-colors duration-200">
              <FontAwesomeIcon icon={faPhone} className="text-3xl mb-4" />
              <h3 className="font-bold mb-2">Call Us</h3>
              <p className="text-sm opacity-90">0962 414 125</p>
              <p className="text-xs opacity-75 mt-2">{t("footerSupport")}</p>
            </div>

            <div className="text-center p-6 bg-emerald-500 rounded-lg hover:bg-emerald-400 transition-colors duration-200">
              <FontAwesomeIcon icon={faEnvelope} className="text-3xl mb-4" />
              <h3 className="font-bold mb-2">Mail Us</h3>
              <p className="text-sm opacity-90">dinhdongphuong@gmail.com</p>
              <p className="text-xs opacity-75 mt-2">
                We'll respond within 24 hours
              </p>
            </div>

            <div className="text-center p-6 bg-emerald-500 rounded-lg hover:bg-emerald-400 transition-colors duration-200">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-3xl mb-4"
              />
              <h3 className="font-bold mb-2">Visit Us</h3>
              <p className="text-sm opacity-90">{t("companyAddress")}</p>
              <p className="text-xs opacity-75 mt-2">{t("timeDetail")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QAContact;
