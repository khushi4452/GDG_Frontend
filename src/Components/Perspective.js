import React from "react";
import css from './Styles/main.module.css'
import photo3 from './../assets/photo3.png'
import "./Styles/Perspective.css"

function Perspective() {
  return (
    <div className={css.Perspective1}>

<div className='Perspective3-head'>
        
        </div>
      <div className="Perspective3">
        <div className="Perspective3-subhead">Our Perspective</div>

        <hr className="Perspective3-hr"></hr>

        <div className="perspective">
          <div className="perspective-text">
            We're a community-driven initiative aiming to bridge the gap between
            research and practice , develop evolutionary thinking and network
            throughout the process. We believe in connecting fellow developers ,
            spreading stimulative ideas and working for a solution driven team.
          </div>
          <img src={photo3}></img>
        </div>
      </div>
    </div>
  );
}

export default Perspective;