import React, { useState, useRef, useEffect } from "react";
import "./Desktop.css";
import { Search } from "lucide-react";
import { RiLoopRightLine } from "react-icons/ri";
import { MdNetworkWifi3Bar } from "react-icons/md";
import { AiOutlineSound } from "react-icons/ai";
import { IoBatteryHalfOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import folder from "../../assets/folder.png";
import chrome from "../../assets/chrome.png";
import myComputer from "../../assets/myComputer.png";
import mozilla from "../../assets/mozilla.png";
import weather from "../../assets/weather.png";
import windows from "../../assets/windows.png";
import copilot from "../../assets/copilot.png";
import microsoftTerms from "../../assets/microsoftTerms.png";
import vscode from "../../assets/vscode.png";
import spotify from "../../assets/spotify.png";
import telegram from "../../assets/telegram.png";
import appstore from "../../assets/appstore.png";
import WindowPopup from "../popup/WindowPopup";
import Hidden from "../popup/Hidden";
import Wifi from "../popup/wifi";
import Weather from "./weather";

const Desktop = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const videoList_Url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=patna&appid=0c9fd33a1e08396e49095c4de43ddf05`;
    await fetch(videoList_Url)
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);

  // let weatherStatus = data.weather[0].main;
  // let temperature = Math.floor(data.main.temp);

  // SHOWING TIME

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  });

  const [showPopup, setShowPopup] = useState(false);
  const [showHidden, setShowHidden] = useState(false);
  const [showWifi, setShowWifi] = useState(false);
  const popupRef = useRef();

  const onClose = () => {
    setShowPopup(false);
  };
  const closePopup = (e) => {
    if (popupRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div>
      <div className="container">
        <div className="hero">
          <div className="folder-container" ref={popupRef} onClick={closePopup}>
            <div className="folder">
              <img src={myComputer} alt="" />
              <p>This PC</p>
            </div>
            <div className="folder">
              <img src={folder} alt="" />
              <p>Folder</p>
            </div>
            <div className="folder">
              <img src={chrome} alt="" />
              <p>ananya kumari</p>
            </div>
            <div className="folder">
              <img src={mozilla} alt="" />
              <p>Firefox</p>
            </div>
          </div>

          {showPopup && <WindowPopup onClose={() => setShowPopup(false)} />}
          {showHidden && <Hidden />}
        </div>
        <div className="taskbar">
          <div className="weather">
            <img src={weather} alt="" />
            <p>
              {/* {temperature}°C */}
              <br />
              {/* {weatherStatus} */}
            </p>
          </div>

          <div className="task-icon">
            <img
              src={windows}
              alt=""
              onClick={() => {
                setShowPopup((prev) => !prev);
              }}
            />
            <div className="search-box">
              <div className="search">
                <Search />
              </div>
              <input type="text" placeholder="Search" />
            </div>

            <div className="app-icon">
              <div className="hover-icon">
                <a
                  href="https://copilot.microsoft.com/onboarding"
                  target="_blank"
                >
                  <img src={copilot} alt="" />
                </a>
              </div>
              <div className="hover-icon">
                <a
                  href="https://www.microsoft.com/en-in/microsoft-teams/group-chat-software"
                  target="_blank"
                >
                  <img src={microsoftTerms} alt="" />
                </a>
              </div>
              <div className="hover-icon">
                <a
                  href="https://apps.microsoft.com/home?hl=en-us&gl=IN"
                  target="_blank"
                >
                  <img src={appstore} alt="" />
                </a>
              </div>
              <div className="hover-icon">
                <a href="https://www.google.com/" target="_blank">
                  <img src={chrome} alt="" />
                </a>
              </div>
              <div className="hover-icon">
                <a href="" target="_blank">
                  <img src={folder} alt="" />
                </a>
              </div>
              <div className="hover-icon">
                <a href="https://telegram.org/" target="_blank">
                  <img src={telegram} alt="" />
                </a>
              </div>
              <div className="hover-icon">
                <a
                  href="https://www.mozilla.org/en-US/firefox/windows/"
                  target="_blank"
                >
                  <img src={mozilla} alt="" />
                </a>
              </div>
              <div className="hover-icon">
                <a href="https://open.spotify.com/" target="_blank">
                  <img src={spotify} alt="" />
                </a>
              </div>
              <div className="hover-icon">
                <a href="https://code.visualstudio.com/" target="_blank">
                  <img src={vscode} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="controls">
            <div
              className="control-hover"
              onClick={() => {
                setShowHidden((prev) => !prev);
              }}
            >
              {showHidden ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className="control-hover">
              <RiLoopRightLine />
            </div>
            <div className="control-hover-text">
              <p>
                ENG <br />
                IN
              </p>
            </div>
            <div
              className="control-hover-2"
              onClick={() => {
                setShowWifi((prev) => !prev);
              }}
            >
              <MdNetworkWifi3Bar />
              <AiOutlineSound />
              <IoBatteryHalfOutline />
            </div>
            <div className="time control-hover">
              {time.toLocaleTimeString("hi-IN", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
              <br />
              {time.toLocaleDateString("hi-IN")}
              <GoBell className="bell" />
            </div>
            {showWifi && <Wifi />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
