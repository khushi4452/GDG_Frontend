import React from 'react';
import css from './Styles/main.module.css'; 
import './Styles/Group.css'; 
import GroupIcon from './../assets/Group.svg'; 

function Group() {
  return (
    <div className={css.Group}>
      <div className='circle'>
        <div className='element'>
          <div className='badge'>
            <img src={GroupIcon} className="img" alt="Group Icon" />
            <div className='overwrite'>03+</div>
          </div>
          <div>Years</div>
        </div>
        
        <div className='element'>
          <div className='badge'>
            <img src={GroupIcon} className="img" alt="Group Icon" />
            <div className='overwrite'>10+</div>
          </div>
          <div>Events</div>
        </div>

        <div className='element'>
          <div className='badge'>
            <img src={GroupIcon} className="img" alt="Group Icon" />
            <div className='overwrite'>1K+</div>
          </div>
          <div> Community Member </div>
        </div>
        
        <div className='element'>
          <div className='badge'>
            <img src={GroupIcon} className="img" alt="Group Icon" />
            <div className='overwrite'>200+</div>
          </div>
          <div>Attendees</div>
        </div>
      </div>
    </div>
  );
}

export default Group;
