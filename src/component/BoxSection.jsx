import React from "react";
import boxLogo from "../assets/box.png";
import BoxCards from "./BoxCards";
const BoxSection = () => {
  return (
    <div>
      <div class="featured-container">
        <div class="featured-box">
          <img src={boxLogo} alt="Featured Image" />
          <h1>Featured Box</h1>
        </div>

        <div class="links-container">
          <button class="tab-links active" >Featured</button>
          <button class="tab-links">New Boxes</button>
          <button class="tab-links">Top Boxes</button>
        </div>

        <div class="sort">
          <p>Sort by:</p>
          <select>
            <option>Price</option>
            <option>Name</option>
          </select>
        </div>
      </div>
        <BoxCards />
      
    </div>
  );
};

export default BoxSection;
