import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import '../styles/footer.css';
// import ScrollToTopBtn from './scrollToTop/scrollToTopBtn';

class Footer extends React.Component {
    render() {
        return (
            <footer id='container'>
                <div className='footer-bottom'>
                    <div className='contact-info'>
                    <img src={process.env.PUBLIC_URL + '/assets/images/logo.jpg'} alt='logo' style={{ width: '100%', height: 'auto' }}></img>
                        <h3>Get in Touch</h3>
                        <p>lorem</p>
                        <form className='gT'>
                            <label htmlFor='emailInput'></label>
                            <input type='email' id='emailInput' placeholder='Enter your query'/>
                            <button type='submit' className='btn'>Contact us</button>
                        </form>
                    </div>
                    <div className='links'>
                        <a href='#dummy'target='_blank'>Link1</a>
                        <a href='#dummy'target='_blank'>Link1</a>
                        <a href='#dummy'target='_blank'>Link1</a>
                    </div>
                    <div className='social-icons'>
                        <div className='head4'>
                            <h4>For more details</h4>
                        </div>
                        <div className='icons'>
                            <a href='#dummy' target='_blank' rel='noopener noreferrer'>
                                <i className='fab fa-instagram'></i>
                            </a>
                            <a href='#dummy' target='_blank' rel='noopener noreferrer'>
                                <i className='fab fa-twitter'></i>
                            </a>
                            <a href='#dummy' target='_blank' rel='noopener noreferrer'>
                                <i className='fab fa-linkedin'></i>
                            </a>
                        </div>
                    </div>
                    {/* <ScrollToTopBtn /> */}
                </div>
                <div className='copyright'>
                    <p className='cRt'>&copyright: {new Date().getFullYear()}@IITDh. All rights reserved.</p>
                </div>
            </footer>
        );
    }
}

export default Footer;