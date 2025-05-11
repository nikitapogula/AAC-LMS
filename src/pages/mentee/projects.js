import { NavLink } from "react-router-dom";
import "./projects.css";
import "./Layout.css";
import Navbar from "../../components/menteeNavbar";
export default function Projects() {
  return (
    <div>
      <Navbar />
      <div className="projectsp">
        <div className="buttonsp">
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
        <div className="textp">
          <NavLink to="/iproject">
            <h2 id="tone">PROJECT 1</h2>
          </NavLink>
          <NavLink to="/iproject">
            <h2 id="ttwo">PROJECT 2</h2>
          </NavLink>
          <NavLink to="/iproject">
            {" "}
            <h2 id="tthree">PROJECT 3</h2>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
