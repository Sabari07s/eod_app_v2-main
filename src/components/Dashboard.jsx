import React from "react";
import DashBoardSideContent from "./DashBoardSideContent";
import { Icon } from "@iconify/react/dist/iconify.js";
import Cal from "./Cal";

const Dashboard = () => {
  return (
    <section className="w-full h-full">
      <div className="w-full h-full flex  ">
        <div className="w-7/12 h-screen overflow-y-scroll no-scrollbar border-r px-4 py-2 border-black max-xs:w-full max-xs:border-none pb-28">
          <div>
            <h2 className="text-[#694F8E] text-xl font-bold">Dashboard</h2>
          </div>
          <div className="pt-4">
            <h1 className="text-4xl">
              Welcome <span className="text-[#694F8E]">Abimanyu!</span>
            </h1>
          </div>
          <div className="w-full mt-6 max-xs:flex max-xs:justify-center">
            <button className="w-7/12 bg-[#694F8E] text-center font-bold text-white text-sm p-2 rounded-xl shadow-md shadow-[#694F8E]">
              Punch Today Attendance
            </button>
          </div>
          <div className="pt-6">
            <h2 className="text-[#694F8E] text-xl font-bold">
              Overall Attendance Status
            </h2>
          </div>
          <div className="pt-4 w-full">
            <div className="size-96 mx-auto border border-black border-dashed rounded-lg max-xs:size-84 p-1 ">
              <Cal />
            </div>
          </div>
          <div className="w-full flex items-center py-3 px-16 flex-wrap max-xs:px-10">
            <div className="w-3/12 flex items-center gap-2 max-xs:w-6/12">
              <Icon
                icon="material-symbols-light:circle"
                fontSize={10}
                color="#098100"
              />
              <p className="text-xs">Full Attendance</p>
            </div>
            <div className="w-3/12 flex items-center gap-2 max-xs:w-6/12">
              <Icon
                icon="material-symbols-light:circle"
                fontSize={10}
                color="#CAB200"
              />
              <p className="text-xs">Half Attendance</p>
            </div>
            <div className="w-2/12 flex items-center gap-2 max-xs:w-4/12">
              <Icon
                icon="material-symbols-light:circle"
                fontSize={10}
                color="#002B98"
              />
              <p className="text-xs">Week Off</p>
            </div>
            <div className="w-2/12 flex items-center gap-2 max-xs:w-4/12">
              <Icon
                icon="material-symbols-light:circle"
                fontSize={10}
                color="#694F8E"
              />
              <p className="text-xs">Today</p>
            </div>
            <div className="w-2/12 flex items-center gap-2 max-xs:w-4/12">
              <Icon
                icon="material-symbols-light:circle"
                fontSize={10}
                color="#FF0000"
              />
              <p className="text-xs">Absent</p>
            </div>
          </div>
          <div className="w-full mt-6 flex justify-center">
            <button className="w-7/12 bg-[#694F8E] text-center font-bold text-white text-sm p-2 rounded-xl shadow-md shadow-[#694F8E] ">
              View Attendance Status
            </button>
          </div>
        </div>
        <DashBoardSideContent />
      </div>
    </section>
  );
};

export default Dashboard;
