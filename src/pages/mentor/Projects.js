import { NavLink } from "react-router-dom";
import "./Projects.css";
import "./Side.css";
import Nav from "../../components/mentorNav";
export default function ProjectsMentor() {
  return (
    <div>
      <Nav />
      <div className="projects">
        <div className="buttons">
          <button id="one">
            <img
              src="https://res.cloudinary.com/dp6gegfek/image/upload/v1699448716/Tej/proj-1_ffy5uf.png"
              alt=""
            ></img>
          </button>
          <button id="two">
            <img
              src="https://res.cloudinary.com/dp6gegfek/image/upload/v1699448716/Tej/proj-2_survd3.png"
              alt=""
            ></img>
          </button>
          <button id="three">
            <img
              src="https://res.cloudinary.com/dp6gegfek/image/upload/v1699448715/Tej/proj-3_hutkyd.png"
              alt=""
            ></img>
          </button>
        </div>
        <div className="text">
          <NavLink to="/indproject">
            <h2 id="ti1">PROJECT 1</h2>
          </NavLink>
          <NavLink to="/indproject">
            <h2 id="ti2">PROJECT 2</h2>
          </NavLink>
          <NavLink to="/indproject">
            <h2 id="ti3">PROJECT 3</h2>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
