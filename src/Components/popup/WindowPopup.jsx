import React, { useRef } from "react";
import "./WindowPopup.css";
import { Search } from "lucide-react";
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
import megan from "../../assets/megan.png";
import { Power } from "lucide-react";

const WindowPopup = ({ onClose }) => {
  const popupRef = useRef();
  const closePopup = (e) => {
    if (popupRef.current === e.target) {
      onClose();
    }
  };
  return (
    <>
      <div ref={popupRef} onClick={closePopup} className="popup-container">
        <div className="popup">
          <div className="pop-search">
            <div className="pop-search-icon">
              <Search />
            </div>
            <input
              type="search"
              name=""
              placeholder="Search for apps, settings, and documents"
            />
          </div>

          <div className="pop-icon">
            <div className="top">
              <p>Pinned</p>
              <select name="" id="">
                <option value="">All apps</option>
              </select>
            </div>

            <div className="icons">
              <div className="pop-hover-icon">
                <img src={folder} alt="" />
                <p>Folder</p>
              </div>
              <div className="pop-hover-icon">
                <img src={chrome} alt="" />
                <p>Chrome</p>
              </div>
              <div className="pop-hover-icon">
                <img src={copilot} alt="" />
                <p>Copilot</p>
              </div>
              <div className="pop-hover-icon">
                <img src={microsoftTerms} alt="" />
                <p>Teams</p>
              </div>
              <div className="pop-hover-icon">
                <img src={spotify} alt="" />
                <p>Spotify</p>
              </div>
              <div className="pop-hover-icon">
                <img src={telegram} alt="" />
                <p>Telegram</p>
              </div>
              <div className="pop-hover-icon">
                <img src={folder} alt="" />
                <p>Folder</p>
              </div>
              <div className="pop-hover-icon">
                <img src={chrome} alt="" />
                <p>Chrome</p>
              </div>
              <div className="pop-hover-icon">
                <img src={copilot} alt="" />
                <p>Copilot</p>
              </div>
              <div className="pop-hover-icon">
                <img src={microsoftTerms} alt="" />
                <p>Teams</p>
              </div>
              <div className="pop-hover-icon">
                <img src={spotify} alt="" />
                <p>Spotify</p>
              </div>
              <div className="pop-hover-icon">
                <img src={telegram} alt="" />
                <p>Telegram</p>
              </div>
              <div className="pop-hover-icon">
                <img src={microsoftTerms} alt="" />
                <p>Teams</p>
              </div>
              <div className="pop-hover-icon">
                <img src={spotify} alt="" />
                <p>Spotify</p>
              </div>
              <div className="pop-hover-icon">
                <img src={telegram} alt="" />
                <p>Telegram</p>
              </div>
            </div>

            <div className="recommended">
              <div className="top">
                <p>Recommended</p>
                <select name="" id="">
                  <option value="">More</option>
                </select>
              </div>
              <div className="middle">
                <div className="recent-middle">
                  <img src={vscode} alt="" />
                  <div className="middle-text">
                    <p>Visual Studio Code</p>
                    <p>Frequently used app</p>
                  </div>
                </div>
                <div className="recent-middle">
                  <img src={appstore} alt="" />
                  <div className="middle-text">
                    <p>Microsoft Store</p>
                    <p>18h ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="user">
              <img src={megan} alt="" />
              <p>Aman Verma</p>
            </div>
            <Power className="power" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WindowPopup;
