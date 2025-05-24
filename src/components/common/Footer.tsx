import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src="/src/assets/images/logo.png"
                alt="Smile Eye Charity"
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-xl font-bold">Smile Eye Charity</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">{t("footerSlogan")}</p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-white" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-white" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-white" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <FontAwesomeIcon icon={faYoutube} className="text-white" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">
              {t("footerCompany")}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FontAwesomeIcon
                  icon={faBuilding}
                  className="text-green-400 mt-1"
                />
                <div>
                  <p className="font-medium text-white">{t("companyName")}</p>
                  <p className="text-gray-300">{t("name_QA")}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-green-400 mt-1"
                />
                <div>
                  <p className="font-medium text-white">{t("number_QA")}</p>
                  <p className="text-gray-300">0962 414 125</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-green-400 mt-1"
                />
                <div>
                  <p className="font-medium text-white">{t("email_QA")}</p>
                  <p className="text-gray-300">dinhdongphuong@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-green-400 mt-1"
                />
                <div>
                  <p className="font-medium text-white">
                    {t("companyAddress_QA")}
                  </p>
                  <p className="text-gray-300">{t("companyAddress")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">
              {t("workHours")}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-green-400 mt-1"
                />
                <div>
                  <p className="text-gray-300">{t("timeDetail")}</p>
                  <p className="text-green-400 font-medium">
                    {t("footerSupport")}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <img
                  src="/src/assets/images/contact.png"
                  alt="Contact us"
                  className="w-32 h-32 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center space-y-2">
            <p className="text-gray-400">
              &copy; 2024 Smile Eye Charity. All rights reserved.
            </p>
            <p className="text-gray-400">
              Developed with ❤️ for a better world
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
