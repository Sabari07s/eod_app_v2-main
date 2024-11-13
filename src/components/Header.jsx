import React, { useContext, useEffect, useState } from "react";
import DataContext from "../context/DataContext";
import brand from "../assets/images/brand_logo.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { format } from "date-fns";

const Header = () => {
  const {
    menuState,
    setMenuState,
    profile,
    setProfile,
    setDashboard,
    setAttendanceList,
    setTrackProgress,
    setLeave,
    setTeam,
    setEodReport,
  } = useContext(DataContext);
  const [CT, setCT] = useState(format(new Date(), "hh:mm:ss a"));
  const setTime = () => {
    setCT(format(new Date(), "HH:mm:ss a"));
  };
  useEffect(() => {
    setInterval(setTime, 1000);
  }, []);
  return (
    <header className="w-full flex justify-around items-center shadow-md">
      <div className="w-3/12 flex justify-around items-center max-xs:hidden">
        <img src={brand} alt="LOGO" className="h-20" />
      </div>
      <div className="w-8/12 h-20 flex justify-around items-center gap-6  px-2 max-xs:w-full max-xs:px-3 ">
        <div
          className=" flex justify-around items-center max-xs:w-1/12 xs:hidden"
          onClick={() => {
            setMenuState(!menuState);
          }}
        >
          <Icon
            icon="heroicons-outline:menu-alt-2"
            fontSize={30}
            color="black"
          />
        </div>
        <div className="w-5/12 max-xs:w-6/12">
          <h1 className="font-bold text-3xl max-xs:text-2xl">Employee(TECH)</h1>
        </div>
        <div className="w-2/12 max-xs:hidden max-md:hidden">
          <h3 className="border text-center p-3 rounded-xl shadow-md text-xs font-bold">
            {/* 11 : 25 : 00 AM */}
            {CT}
          </h3>
        </div>
        <div className="w-2/12 max-xs:hidden max-md:hidden">
          <h3 className="border text-center p-3 rounded-xl shadow-md text-xs font-bold">
            {format(new Date(), "dd MMMM yyyy")}
          </h3>
        </div>
        <div className="w-4/12 flex justify-center  items-center max-xs:w-3/12 ">
          <div className=" flex justify-center  items-center p-1 rounded-full gap-5 bg-[#694F8E]">
            <div className="p-px rounded-full bg-white">
              <Icon
                icon="mingcute:user-4-fill"
                fontSize={30}
                color="black"
                className="cursor-pointer"
                onClick={() => {
                  setDashboard(false);
                  setAttendanceList(false);
                  setEodReport(false);
                  setTrackProgress(false);
                  setLeave(false);
                  setTeam(false);
                  setProfile(true);
                }}
              />
            </div>
            {profile && (
              <p className="text-white font-bold max-xs:hidden">Profile</p>
            )}
            <div className="p-px rounded-full bg-white">
              <Icon
                icon="majesticons:logout-half-circle"
                fontSize={30}
                color="black"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
