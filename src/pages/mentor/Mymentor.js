import { NavLink } from "react-router-dom";
import "./Side.css";
import "./Mymentor.css";
import Nav from "../../components/mentorNav";
export default function Mentor() {
  return (
    <div>
      <Nav />
      <div class="mentor">
        <div id="picture1"></div>
        <div id="picture2"></div>
        <div id="left">
          <h2 id="headl">Name</h2>
          <h2 id="headl">Ph Number</h2>
          <h2 id="headl">email</h2>
        </div>
        <div id="right">
          <h2 id="headr">Name</h2>
          <h2 id="headr">Ph Number</h2>
          <h2 id="headr">email</h2>
        </div>
        <div id="lcolon">
          <h2 id="colon">:</h2>
          <h2 id="colon">:</h2>
          <h2 id="colon">:</h2>
        </div>
        <div id="rcolon">
          <h2 id="colon">:</h2>
          <h2 id="colon">:</h2>
          <h2 id="colon">:</h2>
        </div>
      </div>
    </div>
  );
}
