import React from 'react';
import './Styles/Tech.css';
import androidImage from './../assets/android.png';
import flutterImage from './../assets/Flutter.png';
import CloudImage from './../assets/Cloud.png';
import downarrow from './../assets/downarrow.png';

const Technologies = () => {
  return (
    <div className="technologies">
      <div className="header">
        <div className="header-content">
          <div className="title-container">
            <div className="horizontal-line"></div> 
            <h1 className="title">Technologies</h1>
            <div className="horizontal-line"></div> 
          </div>
        </div>
        <h2 className="subtitle">Domains That Excite Us to Collaborate and Teach!</h2>
      </div>

      <div className="cards">
        <div className="cards">
          <div className="card android"> 
            <img src={androidImage} alt="Android" className="card-image" />
            <h1 className="card-title">Android</h1>
            <img src={downarrow} alt="down arrow" className="down-arrow" />
          </div>

          <div className="card flutter"> 
            <img src={flutterImage} alt="Flutter" className="card-image" />
            <h1 className="card-title">Flutter</h1>
            <img src={downarrow} alt="down arrow" className="down-arrow" />
          </div>

          <div className="card cloud"> 
            <img src={CloudImage} alt="Cloud" className="card-image" />
            <h1 className="card-title">Cloud</h1>
            <img src={downarrow} alt="down arrow" className="down-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Technologies;
