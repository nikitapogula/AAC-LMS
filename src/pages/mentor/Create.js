import { NavLink } from "react-router-dom";
import "./Side.css";
import "./Create.css";
import Nav from "../../components/mentorNav";
export default function Create() {
  return (
    <div>
      <Nav />
      <div class="create-class">
        <p>Create Class</p>
      </div>
      <div class="container-1">
        <form class="form1">
          <h3 id="label-1">Link :</h3>
          <input type="text" id="text1"></input>
          <h3 id="label-2">Time :</h3>
          <input type="text" id="text2"></input>
          <button id="submit1" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div class="container-2">
        <div class="create-task">
          <p>Create Task</p>
        </div>
        <div class="container-3">
          <form class="form2">
            <h3 id="label-3">Title :</h3>
            <input type="text" id="text3"></input>
            <h3 id="label-4">Description :</h3>
            <input type="text" id="text4"></input>
            <h3 id="label-5">Due Date :</h3>
            <input type="text" id="text5"></input>
            <button id="submit2" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
