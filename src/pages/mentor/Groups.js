import { NavLink } from "react-router-dom";
import "./Side.css";
import "./Groups.css";
import Nav from "../../components/mentorNav";
export default function Groups() {
  return (
    <div>
      <Nav />
      <div className="groups">
        <div className="team">
          <h2 id="t1">23AAC20</h2>
          <h2 id="t2">23AAC21</h2>
          <h2 id="t3">23AAC22</h2>
        </div>
        <div className="mentees">
          <NavLink to="/mymentee">
            <h2 id="m11">MENTEE 1 </h2>
          </NavLink>
          <NavLink to="/mymentee">
            <h2 id="m12">MENTEE 1 </h2>
          </NavLink>
          <NavLink to="/mymentee">
            <h2 id="m13">MENTEE 1 </h2>
          </NavLink>
          <NavLink to="/mymentee">
            <h2 id="m14">MENTEE 2 </h2>
          </NavLink>
          <NavLink to="/mymentee">
            <h2 id="m15">MENTEE 2 </h2>
          </NavLink>
          <NavLink to="/mymentee">
            <h2 id="m21">MENTEE 2 </h2>
          </NavLink>
          <NavLink to="/mymentee">
            <h2 id="m22">MENTEE 3 </h2>
          </NavLink>
          <NavLink to="/mymentee">
            <h2 id="m23">MENTEE 3 </h2>
          </NavLink>
          <NavLink to="/mymentee">
            <h2 id="m24">MENTEE 3 </h2>
          </NavLink>
          <NavLink to="/mymentee">
            <h2 id="m25">MENTEE 4 </h2>
          </NavLink>
          <NavLink to="/mymentee">
            <h2 id="m31">MENTEE 4 </h2>
          </NavLink>
          <NavLink to="/mymentee">
            <h2 id="m32">MENTEE 4 </h2>
          </NavLink>
          <NavLink to="/mymentee">
            <h2 id="m33">MENTEE 5 </h2>
          </NavLink>
          <NavLink to="/mymentee">
            <h2 id="m34">MENTEE 5 </h2>
          </NavLink>
          <NavLink to="/mymentee">
            <h2 id="m35">MENTEE 5 </h2>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
