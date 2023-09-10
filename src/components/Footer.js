import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/images/logo.jpg';
import "../styles/footer.css"
function Footer() {
    return (
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="footer-col">
                        <img src={logo} alt="Logo" className="responsive-image" />
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.

                        </p>
                    </div>
                    <div class="footer-col">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> good Morning</a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> good after</a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> good lessss</a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> goodsadbasdbm</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Contact Us</h4>
                        <p>
                            IIT Dharwad, Permanent Campus,
                            Chikka Malligwad
                            Dharwad Karnataka 580007, India
                            <br />
                            <b>Phone:</b> +91 9560081533
                            <br />
                            <b>Email:</b> outreach.iic@iitdh.ac.in
                        </p>
                    </div>
                    <div class="footer-col">
                        <h4>Social</h4>
                        <div class="social-links">
                            <a href="#">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </div>

                    </div>

                </div>

            </div>
            {/* <hr /> */}
        </footer>
    )
}

export default Footer
