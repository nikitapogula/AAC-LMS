import { NavLink } from "react-router-dom";
import "./Profile.css";
import "./Side.css";
import Nav from "../../components/mentorNav";
export default function MentorProfile() {
  return (
    <div>
      <Nav />
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
