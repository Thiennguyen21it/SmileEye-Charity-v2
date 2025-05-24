import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faHandHoldingHeart,
  faUsers,
  faStar,
  faGift,
  faCheck,
  faPhone,
  faEnvelope,
  faGlobe,
  faCreditCard,
  faUniversity,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";

const Contribute: React.FC = () => {
  const { t } = useTranslation();
  const [selectedAmount, setSelectedAmount] = useState<string>("");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [showDonationDetails, setShowDonationDetails] =
    useState<boolean>(false);
  const [activeVolunteerCard, setActiveVolunteerCard] = useState<string | null>(
    null
  );

  const donationAmounts = [
    { value: "25", labelKey: "amount_25" },
    { value: "50", labelKey: "amount_50" },
    { value: "100", labelKey: "amount_100" },
    { value: "250", labelKey: "amount_250" },
  ];

  const contributionMethods = [
    {
      icon: faHeart,
      titleKey: "donation_title",
      descKey: "donation_description",
      color: "bg-red-500",
      gradient: "from-red-50 to-pink-50",
    },
    {
      icon: faUsers,
      titleKey: "volunteer_title",
      descKey: "volunteer_description",
      color: "bg-blue-500",
      gradient: "from-blue-50 to-indigo-50",
    },
    {
      icon: faStar,
      titleKey: "sponsor_title",
      descKey: "sponsor_description",
      color: "bg-yellow-500",
      gradient: "from-yellow-50 to-orange-50",
    },
    {
      icon: faGift,
      titleKey: "inkind_title",
      descKey: "inkind_description",
      color: "bg-purple-500",
      gradient: "from-purple-50 to-violet-50",
    },
  ];

  const volunteerOpportunities = [
    {
      id: "teaching",
      titleKey: "volunteer_teaching",
      descKey: "volunteer_teaching_desc",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
    },
    {
      id: "farming",
      titleKey: "volunteer_farming",
      descKey: "volunteer_farming_desc",
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
    },
    {
      id: "health",
      titleKey: "volunteer_health",
      descKey: "volunteer_health_desc",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    },
    {
      id: "construction",
      titleKey: "volunteer_construction",
      descKey: "volunteer_construction_desc",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
    },
  ];

  const impactStats = [
    { key: "families_helped", number: "150+", icon: faUsers },
    { key: "meals_served", number: "1,000+", icon: faHeart },
    { key: "volunteers_engaged", number: "50+", icon: faHandHoldingHeart },
    { key: "programs_running", number: "6", icon: faStar },
  ];

  const handleDonationSubmit = (): void => {
    const amount = selectedAmount || customAmount;
    if (!amount) {
      toast.error("Please select or enter a donation amount");
      return;
    }
    toast.success(
      `Thank you for your ${amount}$ donation intention! Please contact us to complete the donation.`
    );
  };

  const handleVolunteerApply = (opportunityId: string): void => {
    toast.success(
      "Thank you for your interest! We'll contact you with more details."
    );
    setActiveVolunteerCard(null);
  };

  const handleBankDetailsClick = (): void => {
    navigator.clipboard.writeText("Techcombank - 22296699 - Smile Eye Charity");
    toast.success("Bank details copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            {t("contribute_title")}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed">
            {t("contribute_subtitle")}
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() =>
                document
                  .getElementById("donation-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {t("donate_now")}
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("volunteer-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-400 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {t("apply_volunteer")}
            </button>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-12">
            {t("impact_stats")}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 text-white rounded-full mb-4">
                  <FontAwesomeIcon icon={stat.icon} className="text-2xl" />
                </div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium">{t(stat.key)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Contribute */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4">
            {t("ways_to_contribute")}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Choose the way that best fits your interests and abilities
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {contributionMethods.map((method, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${method.gradient} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 ${method.color} text-white rounded-full mb-4`}
                >
                  <FontAwesomeIcon icon={method.icon} className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {t(method.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(method.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donation-section" className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              {t("donation_title")}
            </h2>
            <p className="text-lg text-gray-600">{t("donation_description")}</p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
              {t("donation_amounts")}
            </h3>

            {/* Donation Amount Selection */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {donationAmounts.map((amount) => (
                <button
                  key={amount.value}
                  onClick={() => {
                    setSelectedAmount(amount.value);
                    setCustomAmount("");
                  }}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                    selectedAmount === amount.value
                      ? "border-emerald-600 bg-emerald-100 text-emerald-700"
                      : "border-gray-200 bg-white hover:border-emerald-300 hover:bg-emerald-50"
                  }`}
                >
                  <div className="text-2xl font-bold">${amount.value}</div>
                  <div className="text-sm text-gray-600 mt-1">
                    {t(amount.labelKey)}
                  </div>
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t("amount_custom")}
              </label>
              <input
                type="number"
                placeholder="Enter amount in USD"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount("");
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            {/* Donation Button */}
            <div className="text-center mb-6">
              <button
                onClick={handleDonationSubmit}
                className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {t("donate_now")}
              </button>
            </div>

            {/* Payment Methods Toggle */}
            <div className="border-t pt-6">
              <button
                onClick={() => setShowDonationDetails(!showDonationDetails)}
                className="w-full flex items-center justify-between text-gray-700 font-medium"
              >
                <span>{t("how_to_donate")}</span>
                <FontAwesomeIcon
                  icon={showDonationDetails ? faChevronUp : faChevronDown}
                />
              </button>

              {showDonationDetails && (
                <div className="mt-6 grid sm:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-white rounded-lg shadow">
                    <FontAwesomeIcon
                      icon={faUniversity}
                      className="text-3xl text-emerald-600 mb-3"
                    />
                    <h4 className="font-bold text-gray-800 mb-2">
                      {t("bank_transfer")}
                    </h4>
                    <button
                      onClick={handleBankDetailsClick}
                      className="text-sm text-gray-600 hover:text-emerald-600 transition-colors"
                      dangerouslySetInnerHTML={{ __html: t("bank_details") }}
                    ></button>
                  </div>

                  <div className="text-center p-4 bg-white rounded-lg shadow">
                    <FontAwesomeIcon
                      icon={faCreditCard}
                      className="text-3xl text-emerald-600 mb-3"
                    />
                    <h4 className="font-bold text-gray-800 mb-2">
                      {t("online_payment")}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {t("contact_donate")}
                    </p>
                  </div>

                  <div className="text-center p-4 bg-white rounded-lg shadow">
                    <FontAwesomeIcon
                      icon={faGlobe}
                      className="text-3xl text-emerald-600 mb-3"
                    />
                    <h4 className="font-bold text-gray-800 mb-2">
                      {t("paypal_venmo")}
                    </h4>
                    <p className="text-sm text-gray-600">{t("paypal_info")}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer-section" className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              {t("volunteer_opportunities")}
            </h2>
            <p className="text-lg text-gray-600">
              {t("volunteer_description")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {volunteerOpportunities.map((opportunity) => (
              <div
                key={opportunity.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
              >
                <img
                  src={opportunity.image}
                  alt={t(opportunity.titleKey)}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    {t(opportunity.titleKey)}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {t(opportunity.descKey)}
                  </p>
                  <button
                    onClick={() => handleVolunteerApply(opportunity.id)}
                    className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors duration-200 font-medium"
                  >
                    {t("apply_volunteer")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {t("get_started")}
          </h2>
          <p className="text-lg mb-8 opacity-90">
            {t("contact_us_contribute")}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faPhone} className="text-2xl" />
              <span className="text-lg">0962 414 125</span>
            </div>
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
              <span className="text-lg">dinhdongphuong@gmail.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contribute;
