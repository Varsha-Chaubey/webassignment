import React from "react";
import logo from "../assets/Layer 2.svg"; 
import homeIcon from "../assets/home-icon.svg"; 
import boxesIcon from "../assets/open-case-icon.svg"; 
import battlesIcon from "../assets/battles-icon.svg"; 
import vipIcon from "../assets/crown-icon.svg";
import affiliatesIcon from "../assets/men-icon.svg"; 

import vector1 from '../assets/Vector.svg'
import vector2 from '../assets/Vector (1).svg'
import vector3 from '../assets/Vector (2).svg'
import vector4 from '../assets/Vector (3).svg'

import twitter from '../assets/twitter.svg'
import insta from '../assets/inst.svg'
import tiktok from '../assets/tiktok.svg'
import youtube from '../assets/youtube.svg'



const SideNavigation = () => {
  return (
    <nav className="side-navigation">
     
      <div className="side-nav-links">
      <div className="side-nav-item active">
        <img src={logo} alt="logo" className="side-nav-icon"/>
      </div>
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
          <img
            src={affiliatesIcon}
            alt="Affiliates icon"
            className="side-nav-icon"
          />
        </div>
      </div>

      <div className="second-side-nav-links">
        <div className="side-nav-item">
          <img src={vector1} alt="Home icon" className="side-nav-icon" />
        </div>
        <div className="side-nav-item">
          <img src={vector2} alt="Boxes icon" className="side-nav-icon" />
        </div>
        <div className="side-nav-item">
          <img src={vector3} alt="Battles icon" className="side-nav-icon" />
        </div>
        <div className="side-nav-item">
          <img src={vector4} alt="VIP icon" className="side-nav-icon" />
        </div>
      </div>

      <div className="third-side-nav-links">
        <div className="third-nav-item">
          <img src={twitter} alt="Home icon" className="side-nav-icon" />
        </div>
        <div className="third-nav-item">
          <img src={insta} alt="Boxes icon" className="side-nav-icon" />
        </div>
        <div className="third-nav-item">
          <img src={tiktok} alt="Battles icon" className="side-nav-icon" />
        </div>
        <div className="third-nav-item">
          <img src={youtube} alt="VIP icon" className="side-nav-icon" />
        </div>
      </div>
    </nav>
  );
};

export default SideNavigation;
