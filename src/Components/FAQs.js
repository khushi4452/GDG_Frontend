import React, { useState } from 'react';
import './Styles/FAQs.css'

const FAQs = () => {
  const [openFaq, setOpenFaq] = useState({});

  const toggleFaq = (index) => {
    setOpenFaq((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">FAQs</h1>

      <div className="faq-list">
        
      
        <div className="faq-question" onClick={() => toggleFaq(1)}>
          <span className="faq-icon">&#8744;</span>
          <h1>What is GDSC?</h1>
        </div>
        {openFaq[1] && (
          <div className="faq-answer1">
            <p>Google Developer Student Clubs (GDSC) are community groups for college and university students interested in Google developer technologies...</p>
          </div>
        )}

        
        <div className="faq-question" onClick={() => toggleFaq(2)}>
          <span className="faq-icon">&#8744;</span>
          <h1>How can you become a part of GDSC?</h1>
        </div>
        {openFaq[2] && (
          <div className="faq-answer2">
            <p>We conduct an annual team recruitment process. The details of recruitment are posted online a few weeks prior...</p>
          </div>
        )}

       
        <div className="faq-question" onClick={() => toggleFaq(3)}>
          <span className="faq-icon">&#8744;</span>
          <h1>What does a GDSC Lead do?</h1>
        </div>
        {openFaq[3] && (
          <div className="faq-answer3">
            <p>A GDSC Lead fills a lot of shoes. He works with the university to build the club...</p>
          </div>
        )}

       
        <div className="faq-question" onClick={() => toggleFaq(4)}>
          <span className="faq-icon">&#8744;</span>
          <h1>How is DSC related to Google?</h1>
        </div>
        {openFaq[4] && (
          <div className="faq-answer4">
            <p>A GDSC Lead fills a lot of shoes. He works with the university to build the club...</p>
          </div>
        )}

      
        <div className="faq-question" onClick={() => toggleFaq(5)}>
          <span className="faq-icon">&#8744;</span>
          <h1>How to reach us?</h1>
        </div>
        {openFaq[5] && (
          <div className="faq-answer5">
            <p>Mail us at <a href="mailto:dsc.rknec@gmail.com" className="faq-email">dsc.rknec@gmail.com</a></p>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default FAQs;
