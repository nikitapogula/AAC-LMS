import { NavLink } from "react-router-dom";
import "./Side.css";
import "./Submissions.css";
import Nav from "../../components/mentorNav";
export default function Submissions() {
  return (
    <div>
      <Nav />
      <div class="container">
        <p1>Mentee</p1>
        <p2>Submission</p2>
        <div id="b1"></div>
        <div id="b2"></div>
        <div id="b3"></div>
        <div id="b4"></div>
        <div id="b5"></div>
        <div id="b6"></div>
        <div id="b7"></div>
        <div id="b8"></div>
        <div id="b9"></div>
        <div id="b10"></div>
        <div id="b11"></div>
        <div id="b12"></div>
      </div>
      <div class="task-name">
        <p>Task Name :</p>
      </div>
    </div>
  );
}
