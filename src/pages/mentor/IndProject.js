import { NavLink } from "react-router-dom";
import "./IndProject.css";
import "./Side.css";
import Nav from "../../components/mentorNav";
export default function IndividualProject() {
  return (
    <div>
      <Nav />
      <div className="individual">
        <h2 id="title">Project Title</h2>
        <h2 id="sample">AAC LMS</h2>
        <h2 id="colon">:</h2>
        <h2 id="code">Source Code</h2>
      </div>
    </div>
  );
}
