import "./../styles/card.css";
import React from "react";

const Card = (props) => {
  const { imageUrl, title, date, venue, description, reviewLink, register } =
    props;

  return (
    <div className="card">
      <div className="card_left">
        <img src={imageUrl} alt={title} className="card_left_image"/>
      </div>
      <div className="card_right">
        <h1>{title}</h1>
        <div className="card_right_details">
          <ul>
            <li>{date}</li>
            <li>{venue}</li>
          </ul>
        </div>
        <div className="card_right_description">
          <p>{description}</p>
        </div>
        <div className="card_right_knowmore">
          <a
            href="https://youtu.be/dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Know more
          </a>
        </div>
        <div className="card_right_button">
          <a href={register} target="_blank" rel="noopener noreferrer">
            REGISTER
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
