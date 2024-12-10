import React from "react";
import "./Wifi.css";
import { WifiHigh } from "lucide-react";
import { FaWifi } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CiBluetooth } from "react-icons/ci";
import { IoAirplaneOutline } from "react-icons/io5";
import { IoBatteryCharging } from "react-icons/io5";
import { FaChromecast } from "react-icons/fa";
import { IoAccessibilityOutline } from "react-icons/io5";
import { CiBrightnessDown } from "react-icons/ci";
import { AiOutlineSound } from "react-icons/ai";
import { IoBatteryHalfOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { CiSettings } from "react-icons/ci";

const Wifi = () => {
  return (
    <>
      <div className="wifi-container">
        <div className="wifi">
          <div className="wifi-box">
            <div className="wifi-icons">
              <FaWifi />
              <MdKeyboardArrowRight />
            </div>
            <p>Nothing 2a</p>
          </div>
          <div className="wifi-box">
            <div className="wifi-icons">
              <CiBluetooth />
              <MdKeyboardArrowRight />
            </div>
            <p>Bluetooth</p>
          </div>
          <div className="wifi-box">
            <div className="wifi-icons">
              <IoAirplaneOutline />
            </div>
            <p>Airplane Mode</p>
          </div>
          <div className="wifi-box">
            <div className="wifi-icons">
              <IoBatteryCharging />
            </div>
            <p>Battery Saver</p>
          </div>
          <div className="wifi-box">
            <div className="wifi-icons">
              <FaChromecast />
            </div>
            <p>Cast</p>
          </div>

          <div className="wifi-box">
            <div className="wifi-icons">
              <IoAccessibilityOutline />
            </div>
            <p>Accessibility</p>
          </div>
        </div>

        <div className="brightness-container">
          <div className="brightness">
            <CiBrightnessDown />
            <hr />
          </div>
          <div className="brightness">
            <AiOutlineSound />
            <hr />
          </div>
        </div>
        <div className="wifi-bottom">
          <div className="battery">
            <IoBatteryHalfOutline />
            <p>80%</p>
          </div>
          <div className="settings">
            <MdOutlineEdit />
            <CiSettings />
          </div>
        </div>
      </div>
    </>
  );
};

export default Wifi;
