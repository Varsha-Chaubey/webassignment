import React from 'react';
import logo from '../assets/_Слой_1.png'; // replace with your logo path
import homeIcon from '../assets/Home.png'; // replace with your home icon path
import boxesIcon from '../assets/treasure-chest 1.png'; // replace with your boxes icon path
import battlesIcon from '../assets/swords 1.png'; // replace with your battles icon path
import vipIcon from '../assets/Crown.png';
import affiliatesIcon from '../assets/User, People, Team Group.png'; // replace with your affiliates icon path

const TopNavigation = () => {
  return (
    <nav className="navigation">
      <div className="top-nav-logo">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="nav-links">
        <div className="nav-item ">
          <img src={homeIcon} alt="Home icon" className="nav-icon" />
          <a href="#home" class="nav-item-link active">Home</a>
        </div>
        <div className="nav-item">
          <img src={boxesIcon} alt="Boxes icon" className="nav-icon" />
          <a href="#boxes" className=' nav-item-link '>Boxes</a>
        </div>
        <div className="nav-item">
          <img src={battlesIcon} alt="Battles icon" className="nav-icon" />
          <a href="#battles" className=' nav-item-link '>Battles</a>
        </div>
        <div className="nav-item">
          <img src={vipIcon} alt="VIP icon" className="nav-icon" />
          <a href="#vip" className=' nav-item-link '>VIP Members</a>
        </div>
        <div className="nav-item">
          <img src={affiliatesIcon} alt="Affiliates icon" className="nav-icon" />
          <a href="#affiliates" className=' nav-item-link '>Affiliates</a>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;
