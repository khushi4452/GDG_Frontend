import React from 'react';
import css from './Styles/main.module.css';
import Going3 from './../assets/Going3.png';
import './Styles/Going.css'; 

function Going() {
  return (
    <div className={css.Going2}>
      <div className='Going4-head'>
    
      </div>
      <div className='Going4-subhead'>
        What Keeps Us Going?
      </div>
      <hr className='Going4-hr' />
      
      <div className='going'>
        <img src={Going3} alt="Going" /> 
        <div className='going-text'>
          Our club helps students to connect, learn, empower and grow. Teamwork, innovative thinking, communication, and leading with solutions is what helps us achieve new heights. The entire team works in coordination to inspire and motivate the upcoming coding community to evolve their skills and broaden their horizons of knowledge.
        </div>
      </div>
    </div>
  );
}

export default Going;
