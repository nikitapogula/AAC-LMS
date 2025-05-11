import "./Login.css";
import { NavLink } from "react-router-dom";
function Login() {
  return (
    <div>
      <img
        id="logo"
        src="https://res.cloudinary.com/dp6gegfek/image/upload/v1699446914/Tej/AAC-logo_cggiv4.png"
        alt="AAC Logo"
      ></img>
      <div class="login">
        <div class="Mentor">
          <div class="split left">
            <div class="centered">
              <img
                id="mentoricon"
                src="https://res.cloudinary.com/dp6gegfek/image/upload/v1699447783/Tej/mentor-img_bsplxi.png"
                alt="Mentor icon"
              ></img>
              <h2 id="t">MENTOR</h2>
              <h4 id="h4l">Fill the following details to login as a Mentor</h4>
              <form class="form" id="form1">
                <h3 id="label2">AAC ID:</h3>
                <input type="text" placeholder="Enter your AAC ID"></input>
                <h3 id="labelp">Password: </h3>
                <input type="text" placeholder="Enter Password"></input>
                <NavLink to="/homementor">
                  <button class="sub" id="sub1" type="submit">
                    Submit
                  </button>
                </NavLink>
              </form>
            </div>
          </div>
        </div>
        <div class="Mentee">
          <div class="split right">
            <div class="centered">
              <img
                id="menteeicon"
                src="https://res.cloudinary.com/dniqddd3d/image/upload/v1699968675/mentee-img_1_zvtevq.png"
                alt="Mentee icon"
              ></img>
              <h2 id="t">MENTEE</h2>
              <h4 id="h4l">Fill the following details to login as a Mentee</h4>
              <form class="form" id="form2">
                <h3 id="label1">AAC ID:</h3>
                <input type="text" placeholder="Enter your AAC ID"></input>
                <h3 id="label">Password: </h3>
                <input type="text" placeholder="Enter Password"></input>
                <NavLink to="home">
                  <button class="sub" id="sub2" type="submit">
                    Submit
                  </button>
                </NavLink>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
