import React from "react";
import { useContext } from "react";
import Header from "./Header";
import DataContext from "../context/DataContext";
import BigSideMenu from "./BigSideMenu";
import SmallSideMenu from "./SmallSideMenu";
import Dashboard from "./Dashboard";
import EmployeeAttendanceList from "./EmployeeAttendanceList";
import EmployeeEODReport from "./EmployeeEODReport";
import EmployeeTrackProgress from "./EmployeeTrackProgress";
import EmployeeRequestLeave from "./EmployeeRequestLeave";
import EmployeeProfile from "./EmployeeProfile";
import ManageTeam from "./ManageTeam";

const UserApplication = () => {
  const {
    menuState,
    dashboard,
    attendanceList,
    eodReport,
    trackProgress,
    leave,
    team,
    profile,
  } = useContext(DataContext);
  return (
    <>
      <Header />

      <div className="flex">
        <div className="w-3/12 max-xs:w-0">
          <BigSideMenu />
        </div>

        <div className="w-9/12 max-xs:w-full mt-4">
          {dashboard && <Dashboard />}
          {attendanceList && <EmployeeAttendanceList />}
          {eodReport && <EmployeeEODReport />}
          {trackProgress && <EmployeeTrackProgress />}
          {leave && <EmployeeRequestLeave />}
          {profile && <EmployeeProfile />}
          {team && <ManageTeam />}
        </div>
      </div>

      {/* Mobile Screen Only */}

      {menuState && <SmallSideMenu />}
    </>
  );
};

export default UserApplication;
