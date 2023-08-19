import React, { useState } from "react";
import "../styles/faqs.css";
import arrowImage from "../assets/images/icon-arrow-down.svg";

function Faqs() {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const data = [
    {
      question: "How many team members can I invite?",
      answer:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
      question:
        "What is the maximum file upload size maximum file upload size?",
      answer:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes! Send us a message and we’ll process your request no questions asked.",
    },
    {
      question: "Do you provide additional support?",
      answer:
        "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
    },
    {
      question: "How many team members can I invite?",
      answer:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
  ];
  const handleQuestionClick = (index) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);
    }
  };
  return (
    <div class="wrapper">
      <div class="accordion__wrapper">
        <h1 class="title__accordion">FAQ</h1>
        <div class="questions__accordions">
          {data.map((item, index) => (
            <div
              key={index}
              class={`question-answer__accordion ${
                activeQuestion === index ? "active" : ""
              }`}
              onClick={() => handleQuestionClick(index)}
            >
              <div class="question">
                <h3 class="title__question">{item.question}</h3>
                <img src={arrowImage} alt="arrow" />
              </div>
              {activeQuestion === index && (
                <div className="answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faqs;
