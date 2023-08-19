import React, { useEffect } from "react";
import "../styles/faqs.css";
import arrowImage from "../assets/images/icon-arrow-down.svg";

function Faqs() {
  useEffect(() => {
    const questions = document.querySelectorAll(".question");

    const handleClick = (event) => {
      const { parentNode } = event.target;
      if (parentNode.classList.contains("active")) {
        parentNode.classList.toggle("active");
      } else {
        questions.forEach((q) => q.parentNode.classList.remove("active"));
        parentNode.classList.add("active");
      }
    };

    questions.forEach((question) => {
      question.addEventListener("click", handleClick);
    });

    return () => {
      // Cleanup: Remove event listeners when the component unmounts
      questions.forEach((question) => {
        question.removeEventListener("click", handleClick);
      });
    };
  }, []);
  return (
    <main>
      <div class="accordion__wrapper">
        <h1 class="title__accordion">FAQ</h1>
        <div class="questions__accordions">
          <div class="question-answer__accordion">
            <div class="question">
              <h3 class="title__question">
                How many team members can I invite?
              </h3>
              <img src={arrowImage} alt="arrow" />
            </div>
            <div class="answer">
              You can invite up to 2 additional users on the Free plan. There is
              no limit on team members for the Premium plan.
            </div>
          </div>

          <div class="question-answer__accordion">
            <div class="question">
              <h3 class="title__question">
                What is the maximum file upload size?
              </h3>
              <img src={arrowImage} alt="arrow" />
            </div>
            <div class="answer ">
              No more than 2GB. All files in your account must fit your allotted
              storage space.
            </div>
          </div>

          <div class="question-answer__accordion">
            <div class="question">
              <h3 class="title__question">How do I reset my password?</h3>
              <img src={arrowImage} alt="arrow" />
            </div>
            <div class="answer ">
              Click “Forgot password” from the login page or “Change password”
              from your profile page. A reset link will be emailed to you.
            </div>
          </div>

          <div class="question-answer__accordion">
            <div class="question">
              <h3 class="title__question">Can I cancel my subscription?</h3>
              <img src={arrowImage} alt="arrow" />
            </div>
            <div class="answer ">
              Yes! Send us a message and we’ll process your request no questions
              asked.
            </div>
          </div>

          <div class="question-answer__accordion">
            <div class="question">
              <h3 class="title__question">
                Do you provide additional support?
              </h3>
              <img src={arrowImage} alt="arrow" />
            </div>
            <div class="answer ">
              Chat and email support is available 24/7. Phone lines are open
              during normal business hours.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Faqs;
