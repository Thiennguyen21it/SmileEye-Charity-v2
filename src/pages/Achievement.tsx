import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faUsers,
  //   faHeart,
  faGraduationCap,
  faLeaf,
  faMedkit,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Achievement: React.FC = () => {
  const { t } = useTranslation();

  const achievements = [
    {
      number: "15k+",
      label: "People",
      description: "Preparation of Charity",
      color: "from-green-400 to-green-600",
    },
    {
      number: "145+",
      label: "Society",
      description: "Direct relief",
      color: "from-blue-400 to-blue-600",
    },
    {
      number: "50k+",
      label: "Project",
      description: "Research Hospital",
      color: "from-purple-400 to-purple-600",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Fundraising For Children And Refugees From Donbass",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&h=400&fit=crop",
      category: "Emergency Relief",
      status: "Completed",
      beneficiaries: "150 families",
    },
    {
      id: 2,
      title: "Educational Support Program",
      image:
        "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=500&h=400&fit=crop",
      category: "Education",
      status: "Ongoing",
      beneficiaries: "200 children",
    },
    {
      id: 3,
      title: "Healthcare Initiative",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=400&fit=crop",
      category: "Healthcare",
      status: "Completed",
      beneficiaries: "300 patients",
    },
    {
      id: 4,
      title: "Sustainable Agriculture Training",
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=400&fit=crop",
      category: "Agriculture",
      status: "Ongoing",
      beneficiaries: "80 farmers",
    },
    {
      id: 5,
      title: "Community Infrastructure Development",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=400&fit=crop",
      category: "Infrastructure",
      status: "Completed",
      beneficiaries: "5 villages",
    },
    {
      id: 6,
      title: "Youth Leadership Program",
      image:
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=500&h=400&fit=crop",
      category: "Youth Development",
      status: "Ongoing",
      beneficiaries: "50 youth",
    },
  ];

  const categories = [
    { name: "Education", icon: faGraduationCap, count: 12 },
    { name: "Healthcare", icon: faMedkit, count: 8 },
    { name: "Environment", icon: faLeaf, count: 15 },
    { name: "Community", icon: faUsers, count: 20 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            {t("achievement")}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed">
            Celebrating the positive impact we've made together in communities
            across Vietnam
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Impact by Numbers
            </h2>
            <p className="text-lg text-gray-600">
              See the measurable difference we've made in people's lives
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${achievement.color} text-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold mb-2">
                    {achievement.label}
                  </div>
                  <div className="text-sm opacity-90">
                    {achievement.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              {t("our_activities")}
            </h2>
            <p className="text-lg text-gray-600">
              Our work spans across multiple areas of community development
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 text-white rounded-full mb-4">
                  <FontAwesomeIcon icon={category.icon} className="text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600">
                  {category.count} completed projects
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Quote Section */}
      <section className="py-12 sm:py-16 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg p-6 sm:p-8 lg:p-12 shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
              {t("project_title")}
            </h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: t("project_content") }}></p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="font-medium">{t("time")}</div>
                <div className="font-medium">{t("place")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600">{t("footerSlogan")}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                    <span
                      className={`inline-flex items-center space-x-1 text-xs font-medium ${
                        project.status === "Completed"
                          ? "text-green-600"
                          : "text-blue-600"
                      }`}
                    >
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className={
                          project.status === "Completed"
                            ? "text-green-600"
                            : "text-blue-600"
                        }
                      />
                      <span>{project.status}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                    {project.title}
                  </h3>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <FontAwesomeIcon
                        icon={faUsers}
                        className="text-emerald-600"
                      />
                      <span className="text-sm">{project.beneficiaries}</span>
                    </div>

                    <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center space-x-1">
                      <span>View More</span>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Current Programs
            </h2>
            <p className="text-lg text-gray-600">{t("program_calling")}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                {t("program_title1")}
              </h3>
              <p
                className="text-gray-600 text-sm mb-6 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t("program_content1") }}
              ></p>
              <button className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors font-medium">
                View More
              </button>
            </div>

            {/* Program 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                {t("program_title2")}
              </h3>
              <p
                className="text-gray-600 text-sm mb-6 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t("program_content2") }}
              ></p>
              <button className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors font-medium">
                View More
              </button>
            </div>

            {/* Program 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                {t("program_title3")}
              </h3>
              <p
                className="text-gray-600 text-sm mb-6 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t("program_content3") }}
              ></p>
              <button className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors font-medium">
                View More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Be Part of Our Next Achievement
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Your support can help us reach even more people and create lasting
            change
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => (window.location.href = "/contribute")}
              className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {t("sponser_button")}
            </button>
            <button
              onClick={() =>
                (window.location.href = "/contribute#volunteer-section")
              }
              className="bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-400 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {t("apply_volunteer")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievement;
