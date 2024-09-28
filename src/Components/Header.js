import React from 'react'; 
import './Styles/Header.css';
import object1 from './../assets/object1.png';
import arrow1 from './../assets/Arrow1.png';
import arrow2 from './../assets/Arrow2.png'
import arrow3 from './../assets/arrow3.png'

const Header = () => {
 return (
 <header className='header'>
 <h1 className='google'>
 <span className='google-blue'>Google</span> 
 <span className='developer-red'> Developer </span>
 <span className='developer-green'> Group</span>
 </h1>
<h2 className='rbu'>
 <span className='rbu-yellow'>RBU Chapter</span>
</h2>
            
 <img src={object1} alt="Illustration related to Google Developers Group" className='header-image' />

 <div class="text-container">
  <p class="text-item">Google Developer Groups are community groups for college</p>
  <p class="text-item">and university students interested in Google developer</p>
  <p class="text-item">technologies.</p>
</div>
        
 <button className='join-button btn-hover'>
 JOIN US
</button>
 <div className='arrowss'>
<img src={arrow1} alt="Arrow 1" className='arrow' />
<img src={arrow2} alt="Arrow 2" className='arrow' />
<img src={arrow3} alt="Arrow 3" className='arrow' />
 </div>
</header>
    );
};

export default Header;