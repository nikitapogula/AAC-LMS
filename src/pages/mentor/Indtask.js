import { NavLink } from "react-router-dom";
import "./Side.css";
import "./Indtask.css";
import Nav from "../../components/mentorNav";
export default function IndTask() {
  return (
    <div>
      <Nav />
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
