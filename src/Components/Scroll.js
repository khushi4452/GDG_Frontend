import React from 'react';
import './Styles/Scroll.css';
import Go from "./../assets/Go.png";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <button onClick={scrollToTop} className="scroll-to-top-button">
      <img src={Go} alt="Go to top" />
    </button>
  );
};

export default ScrollToTopButton;
