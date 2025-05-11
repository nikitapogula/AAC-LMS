import "./iproject.css";
import Navbar from "../../components/menteeNavbar";
import "./Layout.css";
export default function IndProject() {
  return (
    <div>
      <Navbar />
      <div class="individual">
        <h2 id="title">Project Title</h2>
        <h2 id="sample">AAC LMS</h2>
        <h2 id="colon">:</h2>
        <h2 id="code">Source Code</h2>
      </div>
    </div>
  );
}
