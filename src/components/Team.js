import React from "react";
import "../styles/team.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const TeamMember = ({ imgSrc, name, role }) => (
      <div className="card">
        <div className="imbBx">
          <img src={imgSrc} alt={`${name}'s profile`} />
        </div>
        <div className="content">
          <div className="contentBx">
            <div className="name">{name}</div>
            <div className="role">{role}</div>
          </div>
          <ul className="sci">
            <li className = "logos" style={{ zIndex: 1 }}>
              <a href="#" >
              <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li className = "logos" style={{ zIndex: 1 }}>
              <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </div>
      </div>
);

const TeamSection = () => (
      <div className="wrapper">
    <div className="card_Container">
      <TeamMember
        imgSrc="https://img.freepik.com/free-photo/close-up-displeased-young-bearded-man-glasses-wearing-colorful-shirt-isolated-pink-background-looking-camera-with-raised-eyebrow-people-emotions-concept_295783-2777.jpg"
        name="Luna Turner"
        role="Founder"
      />
      <TeamMember
        imgSrc="https://img.freepik.com/free-photo/close-up-displeased-young-bearded-man-glasses-wearing-colorful-shirt-isolated-pink-background-looking-camera-with-raised-eyebrow-people-emotions-concept_295783-2777.jpg"
        name="Bryant Hall"
        role="Developer"
      />
      <TeamMember
        imgSrc="https://img.freepik.com/free-photo/close-up-displeased-young-bearded-man-glasses-wearing-colorful-shirt-isolated-pink-background-looking-camera-with-raised-eyebrow-people-emotions-concept_295783-2777.jpg"
        name="Hope Watkins"
        role="Designer"
      />
            <TeamMember
        imgSrc="https://img.freepik.com/free-photo/close-up-displeased-young-bearded-man-glasses-wearing-colorful-shirt-isolated-pink-background-looking-camera-with-raised-eyebrow-people-emotions-concept_295783-2777.jpg"
        name="Luna Turner"
        role="Founder"
      />
            <TeamMember
        imgSrc="https://img.freepik.com/free-photo/close-up-displeased-young-bearded-man-glasses-wearing-colorful-shirt-isolated-pink-background-looking-camera-with-raised-eyebrow-people-emotions-concept_295783-2777.jpg"
        name="Luna Turner"
        role="Founder"
      />
            <TeamMember
        imgSrc="https://img.freepik.com/free-photo/close-up-displeased-young-bearded-man-glasses-wearing-colorful-shirt-isolated-pink-background-looking-camera-with-raised-eyebrow-people-emotions-concept_295783-2777.jpg"
        name="Luna Turner"
        role="Founder"
      />
      <TeamMember
        imgSrc="https://img.freepik.com/free-photo/close-up-displeased-young-bearded-man-glasses-wearing-colorful-shirt-isolated-pink-background-looking-camera-with-raised-eyebrow-people-emotions-concept_295783-2777.jpg"
        name="Luna Turner"
        role="Founder"
      />
    </div>
    </div>
);

export default TeamSection;
