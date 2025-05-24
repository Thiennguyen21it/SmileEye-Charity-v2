import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./QASection.css";

const QASection = () => {
  const { translate } = useLanguage();
  const [openQuestions, setOpenQuestions] = useState({});

  const qaItems = [
    { question: "ques1_QA", answer: "answer1" },
    { question: "ques2_QA", answer: "answer2" },
    { question: "ques3_QA", answer: "answer3" },
    { question: "ques4_QA", answer: "answer4" },
    { question: "ques5_QA", answer: "answer5" },
    { question: "ques6_QA", answer: "answer6" },
    { question: "ques7_QA", answer: "answer7" },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="qa-section">
      <div className="qa-header text-center">
        <h2 className="qa-title">{translate("QA")}</h2>
        <p className="qa-subtitle">Frequently Asked Questions</p>
      </div>

      <div className="qa-container">
        {qaItems.map((item, index) => (
          <div
            key={index}
            className={`qa-item ${openQuestions[index] ? "open" : ""}`}
          >
            <button
              className="qa-question"
              onClick={() => toggleQuestion(index)}
              aria-expanded={openQuestions[index]}
            >
              <span className="question-text">{translate(item.question)}</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`question-icon ${
                  openQuestions[index] ? "rotated" : ""
                }`}
              />
            </button>

            <div className="qa-answer-wrapper">
              <div className="qa-answer">
                <p>{translate(item.answer)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="qa-footer text-center">
        <h3>{translate("anyquestion_QA")}</h3>
        <p className="qa-quote">"{translate("quote_QA")}"</p>
        <div className="qa-contact">
          <p>Phone: 0962 414 125</p>
          <p>Email: dinhdongphuong@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default QASection;
