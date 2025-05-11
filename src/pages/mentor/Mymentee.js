import { NavLink } from "react-router-dom";
import "./Side.css";
import "./Mymentee.css";
import Nav from "../../components/mentorNav";
export default function MyMentee() {
  return (
    <div>
      <Nav />
      <div class="mentee">
        <div id="picture"></div>
        <div id="details">
          <h2 id="name">Name</h2>
          <h2 id="id">AAC ID</h2>
          <h2 id="groupno">Group No.</h2>
        </div>
        <div id="det">
          <NavLink to="/tosubmit">
            <button id="tasks">Tasks</button>
          </NavLink>
          <NavLink to="/projectsmentor">
            <button id="projects">Projects</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
