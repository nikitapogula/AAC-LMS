import { NavLink } from "react-router-dom";
import "./profile.css";
import "./Layout.css";
import Navbar from "../../components/menteeNavbar";
export default function Profile() {
  return (
    <div>
      <Navbar />
      <div className="style">
        <div id="picture"></div>
        <div id="left">
          <h2>NAME: </h2>
          <h2>AAC ID: </h2>
          <h2>EMAIL: </h2>
          <h2>PHONE NO: </h2>
        </div>
        <button id="button">Change Password</button>
      </div>
    </div>
  );
}
