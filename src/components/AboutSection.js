import React, { useEffect } from "react";
import video from "../assets/videos/video.mp4";
import '../styles/aboutsection.css';

function AboutSection() {

    useEffect(() => {
        const video = document.getElementById('vid');
        video.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        })
    }, [])

    return (
        <div id="container">
            <div className="titleHolder">
                <h2>About Us</h2>
            </div>
            <header className="head">
                <div className="vidBg">
                    <video id="vid" controls autoPlay muted>
                        <source src={video} type="video/mp4" />
                        Unable to load video
                    </video>
                </div>
                <div className="description">
                    <p>

                        IIT Dharwad is proud to announce our inaugural event, a prelude to our Annual Cultural Festival, <b>AVIRAL: 2023</b>, marking a significant milestone in our cultural journey. As we embark on this remarkable venture, we aspire to create an enduring legacy within the realms of art and culture. This event is a fusion of diverse art forms, a celebration of creativity that bridges local and global cultures. With participants from all corners of the nation, the event cultivates a competitive spirit, motivating and recognizing the exceptional talents among students. We offer a stage for artists to display their craft, encouraging healthy competition and providing a glimpse of outstanding performances that can serve as inspiration for aspiring talents. We extend an open invitation to all, inviting you to unite with us and revel in the splendor of art and culture, the IIT Dharwad way. Join us on this inaugural occasion, embracing the rich tapestry of human creativity.                    </p>
                </div>
            </header>
        </div>
    )
}

export default AboutSection;