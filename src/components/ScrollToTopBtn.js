
import React, { useEffect, useState } from 'react';
import '../styles/scrolltotop.css';

const ScrollToTopBtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
            <div className="scroll-icon">↑</div>
        </div>
    );
};

export default ScrollToTopBtn;