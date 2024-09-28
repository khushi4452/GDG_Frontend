import React from 'react';
import Header from './Components/Header'; 
import logo from './assets/navlogo.png'; 
import Navbar from './Components/Nav';
import  Our from './Components/Our.js';
import Perspective from './Components/Perspective.js';
import Going from './Components/Going';
import Group from './Components/Group';
import Tech from './Components/Tech';
import FAQs from './Components/FAQs';
import Footer from './Components/Footer';
import Scroll from './Components/Scroll.js';
function App() {
  return (
    <div className="App">
     
      <Navbar /> 
      <Header /> 
      <Our/>
      <Perspective/>
      <Going/>
      <Group/>
      <Tech/>
      <FAQs/>
      <Scroll/>
      <Footer/>
    
      <header className="App-header">
        
        
      </header>
    </div>
  );
}

export default App;
