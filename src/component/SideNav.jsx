import React from 'react';
import logo from '../assets/gift 1.png'; // replace with your logo path
import homeIcon from '../assets/Home.png'; // replace with your home icon path
import boxesIcon from '../assets/treasure-chest 1.png'; // replace with your boxes icon path
import battlesIcon from '../assets/swords 1.png'; // replace with your battles icon path
import vipIcon from '../assets/Crown.png';
import affiliatesIcon from '../assets/User, People, Team Group.png'; // replace with your affiliates icon path

const SideNavigation = () => {
  return (
    <nav className="side-navigation">
      <div className="side-nav-logo">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="side-nav-links">
        <div className="side-nav-item">
          <img src={homeIcon} alt="Home icon" className="side-nav-icon" />
        </div>
        <div className="side-nav-item">
          <img src={boxesIcon} alt="Boxes icon" className="side-nav-icon" />
        </div>
        <div className="side-nav-item">
          <img src={battlesIcon} alt="Battles icon" className="side-nav-icon" />
        </div>
        <div className="side-nav-item">
          <img src={vipIcon} alt="VIP icon" className="side-nav-icon" />
        </div>
        <div className="side-nav-item">
          <img src={affiliatesIcon} alt="Affiliates icon" className="side-nav-icon" />
        </div>
      </div>
    </nav>
  );
};

export default SideNavigation;
