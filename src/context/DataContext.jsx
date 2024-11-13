import { createContext, useState } from "react";

const DataContext = createContext({});
export const DataProvider = ({ children }) => {
  // SideBar State
  const [menuState, setMenuState] = useState(false);

  // View EOD
  const [eodState, setEodState] = useState(false);

  // Sidebar Navigation
  const [dashboard, setDashboard] = useState(true);
  const [attendanceList, setAttendanceList] = useState(false);
  const [eodReport, setEodReport] = useState(false);
  const [trackProgress, setTrackProgress] = useState(false);
  const [leave, setLeave] = useState(false);
  const [team, setTeam] = useState(false);

  // Profile page Navigation
  const [profile, setProfile] = useState(false);

  return (
    <DataContext.Provider
      value={{
        menuState,
        setMenuState,
        eodState,
        setEodState,
        dashboard,
        setDashboard,
        attendanceList,
        setAttendanceList,
        eodReport,
        setEodReport,
        trackProgress,
        setTrackProgress,
        leave,
        setLeave,
        team,
        setTeam,
        profile,
        setProfile,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
