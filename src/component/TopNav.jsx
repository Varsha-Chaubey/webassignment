import React from "react";
import logo from "../assets/_Слой_1.png";
import homeIcon from "../assets/home-icon.svg";
import boxesIcon from "../assets/open-case-icon.svg";
import battlesIcon from "../assets/battles-icon.svg";
import vipIcon from "../assets/crown-icon.svg";
import affiliatesIcon from "../assets/men-icon.svg";



const TopNavigation = () => {
  return (
    <nav className="navigation">
      <div className="top-nav-logo">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="nav-links">
        <div className="nav-item ">
          <img src={homeIcon} alt="Home icon" className="nav-icon" />
          <a href="#home" class="nav-item-link active">
            Home
          </a>
        </div>
        <div className="nav-item">
          <img src={boxesIcon} alt="Boxes icon" className="nav-icon" />
          <a href="#boxes" className=" nav-item-link ">
            Boxes
          </a>
        </div>
        <div className="nav-item">
          <img src={battlesIcon} alt="Battles icon" className="nav-icon" />
          <a href="#battles" className=" nav-item-link ">
            Battles
          </a>
        </div>
        <div className="nav-item">
          <img src={vipIcon} alt="VIP icon" className="nav-icon" />
          <a href="#vip" className=" nav-item-link ">
            VIP Members
          </a>
        </div>
        <div className="nav-item">
          <img
            src={affiliatesIcon}
            alt="Affiliates icon"
            className="nav-icon"
          />
          <a href="#affiliates" className=" nav-item-link ">
            Affiliates
          </a>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;
