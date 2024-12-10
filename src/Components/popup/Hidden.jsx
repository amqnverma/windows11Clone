import React from "react";
import "./Hidden.css";
import mozilla from "../../assets/mozilla.png";
import weather from "../../assets/weather.png";
import folder from "../../assets/folder.png";
import copilot from "../../assets/copilot.png";
import myComputer from "../../assets/myComputer.png";

const Hidden = () => {
  return (
    <>
      <div className="hidden">
        <div className="hidden-icons hover-hidden">
          <img src={mozilla} alt="" />
        </div>
        <div className="hidden-icons hover-hidden">
          <img src={weather} alt="" />
        </div>
        <div className="hidden-icons hover-hidden">
          <img src={folder} alt="" />
        </div>
        <div className="hidden-icons hover-hidden">
          <img src={copilot} alt="" />
        </div>
        <div className="hidden-icons hover-hidden">
          <img src={myComputer} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hidden;
