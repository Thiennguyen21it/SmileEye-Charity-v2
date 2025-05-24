import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMapMarkerAlt,
  faHeart,
  faShare,
  faUsers,
  faLeaf,
  faGraduationCap,
  faPhone,
  faEnvelope,
  faArrowRight,
  faHandsHelping,
  faSeedling,
  faUtensils,
  faChevronRight,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ContactModal from "../components/ui/ContactModal";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isContentExpanded, setIsContentExpanded] = useState(false);

  const handleSponsorClick = (): void => {
    setIsContactModalOpen(true);
  };

  const handleShareClick = (): void => {
    if (navigator.share) {
      navigator.share({
        title: t("project_title"),
        text: "Join our mission to help Co-tu communities",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      console.log("Link copied to clipboard");
    }
  };

  const renderProjectContent = (content: string): React.ReactElement[] => {
    const paragraphs = content.split("<br><br>");
    const maxLength = 300; // Maximum characters to show when collapsed

    if (!isContentExpanded) {
      // Show only the first paragraph truncated
      const firstParagraph = paragraphs[0].replace(/<\/?br\/?>/g, "");
      const truncated =
        firstParagraph.length > maxLength
          ? firstParagraph.substring(0, maxLength) + "..."
          : firstParagraph;

      return [
        <p
          key={0}
          className="mb-3 text-sm text-gray-700 leading-relaxed text-justify"
          dangerouslySetInnerHTML={{ __html: truncated }}
        />,
      ];
    }

    return paragraphs.map((paragraph, index) => (
      <p
        key={index}
        className="mb-3 text-sm text-gray-700 leading-relaxed text-justify"
        dangerouslySetInnerHTML={{
          __html: paragraph.replace(/<\/?br\/?>/g, ""),
        }}
      />
    ));
  };

  const toggleContent = (): void => {
    setIsContentExpanded(!isContentExpanded);
  };

  const programs = [
    {
      icon: faHandsHelping,
      title: t("program_title1"),
      content: t("program_content1"),
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=300&fit=crop",
      gradient: "from-emerald-500 to-green-600",
    },
    {
      icon: faSeedling,
      title: t("program_title2"),
      content: t("program_content2"),
      image:
        "https://images.unsplash.com/photo-1585314062604-1a357de8b000?w=500&h=300&fit=crop",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: faUtensils,
      title: t("program_title3"),
      content: t("program_content3"),
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&h=300&fit=crop",
      gradient: "from-blue-500 to-emerald-600",
    },
  ];

  const stats = [
    { number: "150+", label: "Families Supported", icon: faUsers },
    { number: "1000+", label: "Meals Provided", icon: faUtensils },
    { number: "6", label: "Active Programs", icon: faLeaf },
    { number: "50+", label: "Volunteers", icon: faHeart },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Project Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Project Title */}
          <div className="text-center mb-6">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight uppercase">
              {t("project_title")}
            </h1>
          </div>

          {/* Project Meta Information */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 space-y-2 lg:space-y-0">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <FontAwesomeIcon icon={faClock} className="text-gray-600" />
                <span>{t("time")}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-gray-600"
                />
                <span>{t("place")}</span>
              </div>
            </div>

            {/* Social Actions */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-gray-700">2000</span>
                <FontAwesomeIcon icon={faHeart} className="text-red-500" />
              </div>
              <button
                className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
                onClick={handleShareClick}
                aria-label="Share project"
              >
                <FontAwesomeIcon icon={faShare} />
              </button>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Video Section - Takes up 2/3 of the space */}
              <div className="lg:col-span-2">
                <div className="aspect-video bg-gray-900 rounded-l-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/543jwFfCZvg?si=cFkeCK3EdYHGqfDM"
                    title="SmileEye Charity Project Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>

              {/* Project Information - Takes up 1/3 of the space */}
              <div className="lg:col-span-1 p-6">
                {/* Project Description */}
                <div className="mb-4">
                  {renderProjectContent(t("project_content"))}

                  {/* Read More/Less Button */}
                  <button
                    onClick={toggleContent}
                    className="flex items-center space-x-1 text-emerald-600 hover:text-emerald-700 text-sm font-medium mt-2 transition-colors duration-200"
                  >
                    <span>{isContentExpanded ? "Read less" : "Read more"}</span>
                    <FontAwesomeIcon
                      icon={isContentExpanded ? faChevronUp : faChevronDown}
                      className="text-xs"
                    />
                  </button>
                </div>

                {/* Action Links */}
                <div className="flex space-x-4 mb-6">
                  <a
                    href="/plan-file.html"
                    className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-center text-sm font-medium"
                  >
                    Plan File
                  </a>
                  <a
                    href="/plan-file.html"
                    className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-center text-sm font-medium"
                  >
                    Pitch File
                  </a>
                </div>

                {/* Funding Progress */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Funding
                    </span>
                    <span className="text-sm font-semibold text-emerald-600">
                      80%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-emerald-600 h-2 rounded-full transition-all duration-500 ease-out"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 shadow-lg hover:shadow-xl text-sm"
                  onClick={handleSponsorClick}
                >
                  {t("sponser_button")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              {t("impact_stats")}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 text-white rounded-full mb-4">
                  <FontAwesomeIcon icon={stat.icon} className="text-2xl" />
                </div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              {t("our_activities")}
            </h2>
            <h3 className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              {t("program_calling")}
            </h3>
          </div>

          {/* Programs Grid */}
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-48 object-cover"
                  />
                  <div
                    className={`absolute top-4 left-4 p-3 rounded-full bg-gradient-to-r ${program.gradient} text-white`}
                  >
                    <FontAwesomeIcon icon={program.icon} className="text-xl" />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4 line-clamp-2">
                    {program.title}
                  </h4>
                  <p
                    className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3"
                    dangerouslySetInnerHTML={{
                      __html: program.content
                        .split("<br><br>")[0]
                        .replace(/<\/?br\/?>/g, ""),
                    }}
                  />
                  <Link
                    to="/achievement"
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-200"
                  >
                    {t("learn_more")}
                    <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* View All Programs Button */}
          <div className="text-center">
            <Link
              to="/achievement"
              className="inline-flex items-center bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              View All Programs
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              {t("blog_title")}
            </h2>
            <p className="text-lg text-gray-600">{t("blog_subtitle")}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=200&fit=crop"
                alt="Blog post"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                {t("blog_post_1_title")}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {t("blog_post_1_content")}
              </p>
              <Link
                to="/blog"
                className="text-emerald-600 hover:text-emerald-700 font-medium text-sm"
              >
                {t("read_more")}
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=200&fit=crop"
                alt="Blog post"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                {t("blog_post_2_title")}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {t("blog_post_2_content")}
              </p>
              <Link
                to="/blog"
                className="text-emerald-600 hover:text-emerald-700 font-medium text-sm"
              >
                {t("read_more")}
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop"
                alt="Blog post"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                {t("blog_post_3_title")}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {t("blog_post_3_content")}
              </p>
              <Link
                to="/blog"
                className="text-emerald-600 hover:text-emerald-700 font-medium text-sm"
              >
                {t("read_more")}
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              View All Posts
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-12 sm:py-16 lg:py-20 bg-emerald-600 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            {t("anyquestion_QA")}
          </h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-10 opacity-90 max-w-3xl mx-auto">
            "{t("quote_QA")}"
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/qa-contact"
              className="bg-white text-emerald-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {t("contact")}
            </Link>
            <button
              className="bg-emerald-500 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-emerald-400 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              onClick={handleSponsorClick}
            >
              Quick Contact
            </button>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
};

export default Home;
