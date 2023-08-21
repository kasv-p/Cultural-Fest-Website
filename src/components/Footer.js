import React from 'react';
import '../styles/footer.css';
// import ScrollToTopBtn from './scrollToTop/scrollToTopBtn';

class Footer extends React.Component {
    render() {
        return (
            <footer id='container'>
                <div className='footer-bottom'>
                    <div className='event-context'>
                        <img src='' alt='logo'></img>
                        <p>
                            lorem
                        </p>
                    </div>
                    <div className='contact-info'>
                        <h3>contact</h3>
                        <p>lorem</p>
                    </div>
                    <div className='links'>
                        <h4>For more details</h4>
                        
                        <a href='#dummy' target='_blank'><i className='fab fa-facebook'></i></a>
                        <a href='#dummy' target='_blank'><i className='fab fa-linkedin'></i></a>
                        <a href='#dummy' target='_blank'><i className='fab fa-instagram'></i></a>
                    </div>
                    {/* <ScrollToTopBtn /> */}
                </div>
            </footer>
        );
    }
}

export default Footer;


// the event context contains the highlights of the event
// (if required only) the contact info contains the contact details of the incharge for any info
// the links sections is to know the updates through social media platforms
// Scroll to top btn need some changes i couldn't fix it on my own need some assistance