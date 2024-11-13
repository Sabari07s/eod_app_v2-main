import { useContext } from "react";
import Header from "./components/Header";
import DataContext from "./context/DataContext";
import BigSideMenu from "./components/BigSideMenu";
import SmallSideMenu from "./components/SmallSideMenu";
import Dashboard from "./components/Dashboard";
import UserApplication from "./components/UserApplication";
import EmployeeAttendanceList from "./components/EmployeeAttendanceList";
import EmployeeEODReport from "./components/EmployeeEODReport";
import EmployeeTrackProgress from "./components/EmployeeTrackProgress";
import EmployeeRequestLeave from "./components/EmployeeRequestLeave";
import EmployeeProfile from "./components/EmployeeProfile";
import ManageTeam from "./components/ManageTeam";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Cal from "./components/Cal";

function App() {
  const { menuState } = useContext(DataContext);
  return (
    <main className="w-screen h-screen overflow-hidden relative">
      <UserApplication />
      {/* <EmployeeAttendanceList /> */}
      {/* <EmployeeEODReport /> */}
      {/* <EmployeeTrackProgress /> */}
      {/* <EmployeeRequestLeave /> */}
      {/* <EmployeeProfile /> */}
      {/* <ManageTeam /> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <Cal /> */}
    </main>
  );
}

export default App;
