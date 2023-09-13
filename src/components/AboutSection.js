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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p>
                </div>
            </header>
        </div>
    )
}

export default AboutSection;