import React, { useState, useEffect } from 'react';
import top from '../assets/images/top.png';
import "../styles/imgandtimer.css";


const ImageAndTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function calculateTimeRemaining() {
    const targetDate = new Date('2024-01-20T00:00:00Z');
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
  
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const totalSeconds = Math.floor(timeDifference / 1000);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const totalHours = Math.floor(totalMinutes / 60);
    const hours = totalHours % 24;
    const days = Math.floor(totalHours / 24);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }


  return (
    <div>
      <img
        src={top}
        alt="top placeholder"
        className="topImage"
        style={{ width: '100%', height: '100vh' }}
      />
      <div className = "heading">
        <h1>AVIRAL</h1>
      </div>
      <div className="timer">
        <div className = "indvStyle">
        <div style = {{marginTop : '10px'}}>{timeRemaining.days}</div>
        <div>days</div>
        </div>
        <div className = "indvStyle">
        <div style = {{marginTop : '10px'}} >{timeRemaining.hours}</div>
        <div>hours</div>
        </div>
        <div className = "indvStyle">
        <div style = {{marginTop : '10px'}} >{timeRemaining.minutes}</div>
        <div>minutes</div>
        </div>
        <div className = "indvStyle">
        <div style = {{marginTop : '10px'}} >{timeRemaining.seconds}</div>
        <div>seconds</div>
        </div>

      </div>
    </div>
  );
};

export default ImageAndTimer;
