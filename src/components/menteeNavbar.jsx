import { NavLink } from 'react-router-dom';
import '../pages/mentee/Layout.css'
import React, { useEffect, useState } from "react";
export default function Navbar () {
    const [isPopupVisible, setPopupVisible] = useState(false);

  const showPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };
    return(
    <div>
      <div className="layout">
        <div className="parent-box">
          <div className="icon-box">
            <NavLink to="/home">
              <div className="icon" id="icon1"></div>
            </NavLink>
            <NavLink to="/tasks">
              <div className="icon" id="icon2"></div>
            </NavLink>
            <NavLink to="/projects">
              <div className="icon" id="icon3"></div>
            </NavLink>
            <NavLink to="/mymentor">
              <div className="icon" id="icon4"></div>
            </NavLink>
            <div onClick={showPopup} className="icon" id="icon5"></div>
            {isPopupVisible && (
              <div className="popup-container">
                <div className="popup-box">
                  <span className="close-button" onClick={closePopup}>
                    &times;
                  </span>
                  <p className="text">Are you sure you want to logout?</p>
                  <NavLink to="/">
                    <button className="bt1">Yes</button>
                  </NavLink>
                  <button className="bt2" onClick={closePopup}>
                    No
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="topbox">
          <div className="logo">
            <img className="logo1" src="https://res.cloudinary.com/dp6gegfek/image/upload/v1699446914/Tej/AAC-logo_cggiv4.png"></img>
          </div>
          <div className="npicons">
            <img className="np" src="https://res.cloudinary.com/dp6gegfek/image/upload/v1699447782/Tej/notification-logo_ixgll2.png"></img>
            <NavLink to="/profile">
              <img className="np" src="https://res.cloudinary.com/dniqddd3d/image/upload/v1699968720/profile-img_hj7lom.png"></img>
            </NavLink>
          </div>
        </div>
      </div>
      </div>
    )
}
