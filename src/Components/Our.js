import React from 'react';
import mission1 from './../assets/mission1.png'
import "./Styles/Our.css"
import css from './Styles/main.module.css'

function Our() {
  return (
    <div className={css.our2}>
      <div className='our2-head'>
        Get To Know Us!
      </div>

      <div className='our2-subhead'>
        Our Mission
      </div>
      <hr className='our2-hr'></hr>

      <div className='mission'>
        <img src={mission1} alt='Our Mission' /> 
        <div className='mission-text'>
          Our mission involves community engagement, leadership development, building strong tech foundation, while enabling all tech enthusiasts to contribute to the global society.
        </div>
      </div>
    </div>
  );
}

export default Our;
