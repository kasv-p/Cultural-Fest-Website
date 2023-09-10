import React, { Fragment } from 'react'
// import '../styles/aboutsection.css'
import { Grid, Typography, Container } from '@mui/material';
import ResponsiveVideo from 'react-responsive-video';
// import 'react-responsive-video/styles.css';
import footer from '../assets/images/footer.jpg'
function AboutSection() {
    return (
        <div class="responsive-container-block bigContainer">
            <div class="responsive-container-block Container bottomContainer">
                <div class="ultimateImg">
                    <img class="mainImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp4.svg" />
                    <div class="purpleBox">
                        <p class="purpleText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus.
                        </p>
                        <img class="stars" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp5.svg" />
                    </div>
                </div>
                <div class="allText bottomText">
                    <p class="text-blk headingText">
                        About Me
                    </p>
                    <p class="text-blk subHeadingText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <p class="text-blk description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in ullamcorper quis vestibulum ligula elementum ut.
                    </p>
                    <a class="explore">
                        View Services
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
