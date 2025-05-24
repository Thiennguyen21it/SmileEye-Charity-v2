import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faGlobe,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Contributors: React.FC = () => {
  const { t } = useTranslation();

  const sponsors = [
    {
      id: 1,
      name: "Nguyen Van A",
      role: "Major Sponsor",
      location: "Hanoi, Vietnam",
      email: "sponsor1@example.com",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Nguyen Van B",
      role: "Gold Sponsor",
      location: "Ho Chi Minh City, Vietnam",
      email: "sponsor2@example.com",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Nguyen Van C",
      role: "Silver Sponsor",
      location: "Da Nang, Vietnam",
      email: "sponsor3@example.com",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    },
    {
      id: 4,
      name: "Nguyen Van D",
      role: "Bronze Sponsor",
      location: "Can Tho, Vietnam",
      email: "sponsor4@example.com",
      image:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=300&h=300&fit=crop",
    },
    {
      id: 5,
      name: "Nguyen Van E",
      role: "Community Supporter",
      location: "Quang Nam, Vietnam",
      email: "sponsor5@example.com",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop",
    },
    {
      id: 6,
      name: "Nguyen Van F",
      role: "Volunteer Coordinator",
      location: "Hue, Vietnam",
      email: "sponsor6@example.com",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            {t("contributors")}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed">
            Meet the amazing people and organizations who make our mission
            possible
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Our Supporters
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {t("introSMC")}
          </p>
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg p-6 sm:p-8">
            <p className="text-gray-700 italic text-lg leading-relaxed">
              "{t("footerSlogan")}"
            </p>
          </div>
        </div>
      </section>

      {/* Contributors Grid */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-12">
            Sponsors & Contributors
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
              >
                <div className="p-6 text-center">
                  <div className="relative mb-6">
                    <img
                      src={sponsor.image}
                      alt={sponsor.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-emerald-600 text-white rounded-full p-2">
                      <FontAwesomeIcon icon={faHeart} className="text-sm" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {sponsor.name}
                  </h3>

                  <div className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {sponsor.role}
                  </div>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center space-x-2">
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="text-emerald-600"
                      />
                      <span>{sponsor.location}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-emerald-600"
                      />
                      <span className="hover:text-emerald-600 transition-colors">
                        {sponsor.email}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              {t("founder")}
            </h2>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg p-6 sm:p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1 text-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
                  alt="Dinh Thi Dong Phuong"
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Dinh Thi Dong Phuong
                </h3>
                <p
                  className="text-emerald-600 font-medium mb-4"
                  dangerouslySetInnerHTML={{ __html: t("founder1") }}
                ></p>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center space-x-2">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-emerald-600"
                    />
                    <span>0962 414 125</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-emerald-600"
                    />
                    <span>dinhdongphuong@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="text-emerald-600"
                    />
                    <span>{t("companyAddress")}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <p
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: t("founder") }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Join Our Community of Contributors
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Become part of our mission to create lasting change in underserved
            communities
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => (window.location.href = "/contribute")}
              className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {t("donate_now")}
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

export default Contributors;
