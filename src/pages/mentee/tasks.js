import { NavLink } from "react-router-dom";
import "./tasks.css";
import Navbar from "../../components/menteeNavbar";
export default function Tasks() {
  return (
    <div>
      <Navbar />
      <div class="contain">
        <p id="p1">Tasks</p>
        <p id="p2">Deadline</p>
        <NavLink to="/itask">
          <div id="box1"></div>
        </NavLink>
        <NavLink to="/itask">
          <div id="box2"></div>
        </NavLink>
        <NavLink to="/itask">
          <div id="box3"></div>
        </NavLink>
        <NavLink to="/itask">
          <div id="box4"></div>
        </NavLink>
        <NavLink to="/itask">
          <div id="box5"></div>
        </NavLink>
        <div id="box8"></div>
        <div id="box9"></div>
        <div id="box10"></div>
        <div id="box11"></div>
        <div id="box12"></div>
      </div>
    </div>
  );
}
