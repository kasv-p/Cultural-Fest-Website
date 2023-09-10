import "./../styles/card.css";
import React, { useState, useEffect } from "react";

const Card = (props) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);


        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const {
        imageUrl,
        title,
        date,
        month,
        side,
        venue,
        description,
        register,
    } = props;
    if (side === "left" || windowWidth <= 1000) {
        return (
            <div className="card left">
                <div className="card_left">
                    <img src={imageUrl} alt={title} className="card_left_image" />
                    {/* <div className="card_left_date">{date}</div>
                    <div className="card_left_month">{month}</div> */}
                </div>
                <div className="card_right">
                    <h1>{title}</h1>
                    <div className="card_right_details">
                        <ul>
                            <li>{venue}</li>
                        </ul>
                        <br />
                    </div>
                    <div className="card_right_description">
                        <p>{description}</p>
                    </div>

                    <div className="card_right_button">
                        <a href={register} target="_blank" rel="noopener noreferrer">
                            REGISTER
                        </a>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="card right">
                <div className="card_right">
                    <h1>{title}</h1>
                    <div className="card_right_details">
                        <ul>
                            <li>{venue}</li>
                        </ul>
                        <br />
                    </div>
                    <div className="card_right_description">
                        <p>{description}</p>
                    </div>

                    <div className="card_right_button">
                        <a href={register} target="_blank" rel="noopener noreferrer">
                            REGISTER
                        </a>
                    </div>
                </div>
                <div className="card_left">
                    <img src={imageUrl} alt={title} className="card_left_image" />
                    {/* <div className="card_left_time">
                        <div className="card_left_date">{date}</div>
                        <div className="card_left_month">{month}</div>
                    </div> */}
                </div>
            </div>
        );
    }
};
export default Card;