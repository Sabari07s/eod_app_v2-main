import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const EmployeeAttendanceList = () => {
  return (
    <section className="w-full h-full p-4">
      <div className="w-full">
        <h1 className="text-xl font-bold text-[#694F8E]">Attendance Status</h1>
      </div>
      <div className="w-full flex items-center pt-4 max-xs:justify-between">
        <h3 className="w-2/12 text-lg font-bold max-xs:w-5/12">July 2024</h3>
        <div className="w-7/12 flex max-xs:justify-end max-xs:pe-10">
          <Icon
            icon="iconamoon:arrow-left-2-bold"
            fontSize={30}
            color="black"
          />
          <Icon
            icon="iconamoon:arrow-right-2-bold"
            fontSize={30}
            color="black"
          />
        </div>
      </div>
      <div className="w-full pt-4 h-screen overflow-y-scroll no-scrollbar">
        <table className="w-full table-auto">
          <thead>
            <tr className="border-b">
              <th className="text-lg text-start font-bold text-[#694F8E] p-2">
                Date
              </th>
              <th className="text-lg text-start font-bold text-[#694F8E] p-2">
                Attendance Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2 text-start">24-07-2024</td>
              <td className="p-2 text-start">Full Attendance</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default EmployeeAttendanceList;
