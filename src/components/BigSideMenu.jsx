import React, { useContext } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import brand from "../assets/images/brand_logo.png";
import DataContext from "../context/DataContext";

const BigSideMenu = () => {
  const {
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
    setProfile,
  } = useContext(DataContext);
  return (
    <aside className="w-3/12 h-full shadow-lg overflow-hidden absolute top-0 left-0 bg-white max-xs:hidden">
      <div className="w-full flex justify-around items-center ">
        <img src={brand} alt="LOGO" className=" h-20" />
      </div>
      <div className="">
        <div
          className={`w-full flex px-8 items-center gap-4 py-2 cursor-pointer hover:bg-[#694F8E] hover:text-white ${
            dashboard ? `bg-[#694F8E] text-white ` : `bg-white`
          }`}
          onClick={() => {
            setDashboard(true);
            setAttendanceList(false);
            setEodReport(false);
            setTrackProgress(false);
            setLeave(false);
            setTeam(false);
            setProfile(false);
          }}
        >
          <div className="p-px rounded-full bg-white">
            <Icon
              icon="material-symbols-light:space-dashboard-rounded"
              fontSize={30}
              color="black"
            />
          </div>
          <h3 className="text-md hover:text-white">Dashboard</h3>
        </div>
        <div
          className={`w-full flex px-8 items-center gap-4 py-2 cursor-pointer hover:bg-[#694F8E] hover:text-white ${
            attendanceList ? `bg-[#694F8E] text-white ` : `bg-white`
          }`}
          onClick={() => {
            setDashboard(false);
            setAttendanceList(true);
            setEodReport(false);
            setTrackProgress(false);
            setLeave(false);
            setTeam(false);
            setProfile(false);
          }}
        >
          <div className="p-px rounded-full bg-white">
            <Icon icon="ri:bar-chart-fill" fontSize={30} color="black" />
          </div>
          <h3 className="text-md hover:text-white">Attendance Status</h3>
        </div>
        <div
          className={`w-full flex px-8 items-center gap-4 py-2 cursor-pointer hover:bg-[#694F8E] hover:text-white ${
            eodReport ? `bg-[#694F8E] text-white ` : `bg-white`
          }`}
          onClick={() => {
            setDashboard(false);
            setAttendanceList(false);
            setEodReport(true);
            setTrackProgress(false);
            setLeave(false);
            setTeam(false);
            setProfile(false);
          }}
        >
          <div className="p-px rounded-full bg-white">
            <Icon
              icon="heroicons:document-chart-bar"
              fontSize={30}
              color="black"
            />
          </div>
          <h3 className="text-md hover:text-white">EOD Report</h3>
        </div>
        <div
          className={`w-full flex px-8 items-center gap-4 py-2 cursor-pointer hover:bg-[#694F8E] hover:text-white ${
            trackProgress ? `bg-[#694F8E] text-white ` : `bg-white`
          }`}
          onClick={() => {
            setDashboard(false);
            setAttendanceList(false);
            setEodReport(false);
            setTrackProgress(true);
            setLeave(false);
            setTeam(false);
            setProfile(false);
          }}
        >
          <div className="p-px rounded-full bg-white">
            <Icon icon="ic:outline-work-history" fontSize={30} color="black" />
          </div>
          <h3 className="text-md hover:text-white">Track Progress</h3>
        </div>
        <div
          className={`w-full flex px-8 items-center gap-4 py-2 cursor-pointer hover:bg-[#694F8E] hover:text-white ${
            leave ? `bg-[#694F8E] text-white ` : `bg-white`
          }`}
          onClick={() => {
            setDashboard(false);
            setAttendanceList(false);
            setEodReport(false);
            setTrackProgress(false);
            setLeave(true);
            setTeam(false);
            setProfile(false);
          }}
        >
          <div className="p-px rounded-full bg-white">
            <Icon
              icon="fluent:mail-alert-28-regular"
              fontSize={30}
              color="black"
            />
          </div>
          <h3 className="text-md hover:text-white">Request For Leave</h3>
        </div>
        <div
          className={`w-full flex px-8 items-center gap-4 py-2 cursor-pointer hover:bg-[#694F8E] hover:text-white ${
            team ? `bg-[#694F8E] text-white ` : `bg-white`
          }`}
          onClick={() => {
            setDashboard(false);
            setAttendanceList(false);
            setEodReport(false);
            setTrackProgress(false);
            setLeave(false);
            setTeam(true);
            setProfile(false);
          }}
        >
          <div className="p-px rounded-full bg-white">
            <Icon icon="fa6-solid:user-group" fontSize={30} color="black" />
          </div>
          <h3 className="text-md hover:text-white">Manage Team</h3>
        </div>
      </div>
    </aside>
  );
};

export default BigSideMenu;
