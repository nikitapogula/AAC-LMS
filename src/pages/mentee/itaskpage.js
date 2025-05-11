import { NavLink } from "react-router-dom";
import "./itaskpage.css";
import "./Layout.css";
import Navbar from "../../components/menteeNavbar";
export default function IndividualTask() {
  return (
    <div>
      <Navbar />
      <div className="task">
        <div id="titles">
          <h2 id="head">CLASS LINK </h2>
          <h2 id="head">TASK TITLE</h2>
          <h2 id="head">DESCRIPTION</h2>
          <h2 id="head">DUE DATE</h2>
          <h2 id="feedback">FEEDBACK</h2>
        </div>
        <button id="upload">UPLOAD</button>
      </div>
    </div>
  );
}
