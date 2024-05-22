import React from "react";
import header1 from "../assets/image 58.png";
import header2 from "../assets/image 59.png";
import { liveData } from "../data/data";
import BoxSection from "./BoxSection";

const HeroSection = () => {
  return (
    <div className="header-container">
      <div className="heading-container">
        <div
          style={{
            height: "10px",
            width: "10px",
            borderRadius: "50%",
            background: "#B1FF62",
            border: "8px solid #354529",
          }}
        ></div>
        <h1
          style={{
            color: "#fff",
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "2",
            paddingLeft: "10px",
          }}
        >
          Live drops
        </h1>
      </div>
      <div className="data-container">
        {liveData.map((item, id) => {
          console.log(item.image);
          return (
            <div key={item.id} className="item-container">
              <img src={item.image} alt={`item-${item.id}`} />
              <div className="text-container">
                <p style={{ margin: "0" }}>{`$ ${item.price}`}</p>
                <img src={item.logo} alt="logo" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="banner-container">
        <div className="banner-container-first">
          <div >
            <h1>
              Sign Up today and claim your FREE box
            </h1>
            <p>
              Unlock YOUR Free Box Today! Each box is a treasure trove of
              excitement waiting to 
              be discovered. Don't miss out – dive into 
              the unknown with us!
            </p>
            <button>Claim now</button>
          </div>
          <img src={header1} alt="" />
        </div>

        <div className="banner-container-second">
          <h1>
            Earn up to 10% on <br />
            deposits from
            <br /> your friends{" "}
          </h1>
          <p>
            Give your friends a 5% bonus <br />
            added to all their cash deposits
          </p>

          <div className="image-container">
            <button>Refer a friend</button>
            <img src={header2} alt="" />
          </div>
        </div>
      </div>
        <BoxSection/>

    </div>
  );
};

export default HeroSection;
