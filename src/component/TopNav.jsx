import React, { useState } from "react";
import logo from "../assets/_Слой_1.png";
import homeIcon from "../assets/home-icon.svg";
import boxesIcon from "../assets/open-case-icon.svg";
import battlesIcon from "../assets/battles-icon.svg";
import vipIcon from "../assets/crown-icon.svg";
import affiliatesIcon from "../assets/men-icon.svg";
import menu from "../assets/menu.svg";

const topNaveItem = [
  {
    id: 1,
    name: "Home",
    icon: homeIcon,
    href: "#home",
  },
  {
    id: 2,
    name: "Boxes",
    icon: boxesIcon,
    href: "#boxes",
  },
  {
    id: 3,
    name: "Battles",
    icon: battlesIcon,
    href: "#battles",
  },
  {
    id: 4,
    name: "VIP Members",
    icon: vipIcon,
    href: "#vip",
  },
  {
    id: 5,
    name: "Affiliates",
    icon: affiliatesIcon,
    href: "#affiliates",
  },
];

const TopNavigation = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
    console.log("click")
  };
  return (
    <nav className="navigation">
      <div className="top-nav-logo">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="nav-links">
        {topNaveItem.map((item, index) => (
          <div className="nav-item" key={item.id}>
            <img src={item.icon} alt={`${item.name} icon`} className="nav-icon" />
            <a href={item.href} className={`nav-item-link ${index === 0 ? "active" : ""}`}>
              {item.name}
            </a>
          </div>
        ))}
      </div>
      <div className="menu-icon" onClick={toggleDropdown}>
        <img src={menu} alt="Menu Icon" />
      </div>
      {isDropdownVisible && (
        <div className="dropdown-menu">
          {topNaveItem.map(item => (
            <div className="dropdown-item" key={item.id}>
               <img src={item.icon} alt={`${item.name} icon`} className="m-nav-icon" />
              <a href={item.href} className="dropdown-link">
                {item.name}
              </a>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default TopNavigation;
