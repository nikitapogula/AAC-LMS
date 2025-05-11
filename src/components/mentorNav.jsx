import { NavLink } from 'react-router-dom';
import '../pages/mentee/Layout.css'
import React, { useEffect, useState } from "react";
export default function Nav () {
    const [isPopupVisible, setPopupVisible] = useState(false);

  const showPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };
    return(
        <div>
        <div class="parent-box">
          <div class="icon-box">
            <NavLink to="/homementor">
              <div class="icon" id="icon-1"></div>
            </NavLink>
            <div class="icon" id="icon-2"></div>
            <NavLink to="/projectsmentor">
              <div class="icon" id="icon-3"></div>
            </NavLink>
            <NavLink to="/mentor">
              <div class="icon" id="icon-4"></div>
            </NavLink>
            <NavLink to="/groups">
            <div class="icon" id="icon-5"></div>
            </NavLink>
            <div onClick={showPopup} className="icon" id="icon-6"></div>
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
    )
}