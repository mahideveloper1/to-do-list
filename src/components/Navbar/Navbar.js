import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
   const [isNavOpen, setIsNavOpen] = useState(false);
  const [showPomodoroTimer, setShowPomodoroTimer] = useState(false);
 
  const handlePomodoroClick = () => {
    setShowPomodoroTimer(true);
    setIsNavOpen(false);
  };
 
  return (
    <>
    <nav class="navbar">
    {/* <!-- LOGO --> */}
    <div class="logo">To-Do-Pomodoro-App</div>

    {/* <!-- NAVIGATION MENU --> */}
    <ul class="nav-links">

      {/* <!-- USING CHECKBOX HACK --> */}
      <input type="checkbox" id="checkbox_toggle"   />
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>
      <div class="menu">

        <li><a href="/">Home</a></li>
        {/* <li><a href="/" >Pomodoro-Timer</a></li> */}
          
        <li class="services">
          <a href="/">Analytics</a>
        </li>

        <li><a href="/">About-app</a>
        </li>
        
      </div>
    </ul>
    
  </nav>
  </>
  );
};
export default Navbar;

