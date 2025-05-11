import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Imported pages
import Login from "./pages/Login";
import Profile from "./pages/mentee/profile";
import Tasks from "./pages/mentee/tasks";
import Projects from "./pages/mentee/projects";
import MyMentor from "./pages/mentee/mymentor";
import IndProject from "./pages/mentee/iproject";
import IndividualProject from "./pages/mentor/IndProject";
import IndividualTask from "./pages/mentee/itaskpage";
import HomeMentor from "./pages/mentor/home";
import MentorProfile from "./pages/mentor/Profile";
import ProjectsMentor from "./pages/mentor/Projects";
import Mentor from "./pages/mentor/Mymentor";
import Groups from "./pages/mentor/Groups";
import MyMentee from "./pages/mentor/Mymentee";
import ToSubmit from "./pages/mentor/Tosubmit";
import IndTask from "./pages/mentor/Indtask";
import Submissions from "./pages/mentor/Submissions";
import Create from "./pages/mentor/Create";
import LogoutComponent from "./components/logout";
import Demo from "./pages/demo";
import ReactCalendar from "./pages/mentee/Home";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Login />} />
      <Route path="/demo" element={<Demo />} />
      <Route index path="/home" element={<ReactCalendar />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/mymentor" element={<MyMentor />} />
      <Route path="/iproject" element={<IndProject />} />
      <Route path="/itask" element={<IndividualTask />} />
      <Route path="/homementor" element={<HomeMentor />} />
      <Route path="/profilementor" element={<MentorProfile />} />
      <Route path="/projectsmentor" element={<ProjectsMentor />} />
      <Route path="/indproject" element={<IndividualProject />} />
      <Route path="/mentor" element={<Mentor />} />
      <Route path="/groups" element={<Groups />} />
      <Route path="/mymentee" element={<MyMentee />} />
      <Route path="/tosubmit" element={<ToSubmit />} />
      <Route path="/task" element={<IndTask />} />
      <Route path="/submissions" element={<Submissions />} />
      <Route path="/create" element={<Create />} />
      <Route path="/logout" element={<LogoutComponent />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
