import React, { useContext } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import DataContext from "../context/DataContext";

const ManageTeam = () => {
  const { eodState, setEodState } = useContext(DataContext);
  return (
    <section className="w-full h-full p-4 relative">
      <div className="w-full">
        <h1 className="text-xl font-bold text-[#694F8E]">Manage Team</h1>
      </div>
      <div className="w-full flex items-center pt-4 max-xs:justify-between">
        <h3 className="w-2/12 text-lg font-bold max-xs:w-5/12">
          25 July 2024, Thursday
        </h3>
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
      <div className="w-full pt-4 h-screen overflow-y-scroll no-scrollbar max-xs:overflow-x-scroll">
        <table className="w-screen table-fixed xs:table-auto xs:w-full ">
          <thead>
            <tr className="border-b ">
              <th className="text-lg text-start font-bold text-[#694F8E] p-2">
                Emp ID
              </th>
              <th className="text-lg text-start font-bold text-[#694F8E] p-2">
                Name
              </th>
              <th className="text-lg text-start font-bold text-[#694F8E] p-2">
                Role
              </th>
              <th className="text-lg text-start font-bold text-[#694F8E] p-2">
                EOD Report
              </th>
              <th className="text-lg text-start font-bold text-[#694F8E] p-2">
                Update Attendance
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2 text-start">K20240519</td>
              <td className="p-2 text-start">Abimanyu</td>
              <td className="p-2 text-start">TECH</td>
              <td className="p-2 text-start">
                <button
                  className="w-7/12 bg-[#694F8E] text-center font-bold text-white text-sm p-2 rounded-xl shadow-md shadow-[#694F8E] max-xs:w-full"
                  onClick={() => {
                    setEodState(!eodState);
                  }}
                >
                  View EOD
                </button>
              </td>
              <td className="p-2 text-start flex gap-3">
                <button className="w-3/12 bg-[#098100] text-center font-bold text-white text-sm p-2 rounded-xl shadow-md shadow-[#098100] max-xs:w-full">
                  Full
                </button>
                <button className="w-3/12 bg-[#CAB200] text-center font-bold text-white text-sm p-2 rounded-xl shadow-md shadow-[#CAB200] max-xs:w-full">
                  Half
                </button>
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-2 text-start">K20240519</td>
              <td className="p-2 text-start">Abimanyu</td>
              <td className="p-2 text-start">TECH</td>
              <td className="p-2 text-start">
                <button
                  className="w-7/12 bg-[#694F8E] text-center font-bold text-white text-sm p-2 rounded-xl shadow-md shadow-[#694F8E] max-xs:w-full"
                  onClick={() => {
                    setEodState(!eodState);
                  }}
                >
                  View EOD
                </button>
              </td>
              <td className="p-2 text-start flex gap-3">
                <button className="w-3/12 bg-[#098100] text-center font-bold text-white text-sm p-2 rounded-xl shadow-md shadow-[#098100] max-xs:w-full">
                  Full
                </button>
                <button className="w-3/12 border-2 border-[#CAB200] text-center font-bold text-sm p-2 rounded-xl shadow-md shadow-[#CAB200] max-xs:w-full">
                  Half
                </button>
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-2 text-start">K20240519</td>
              <td className="p-2 text-start">Abimanyu</td>
              <td className="p-2 text-start">TECH</td>
              <td className="p-2 text-start">
                <button
                  className="w-7/12 bg-[#694F8E] text-center font-bold text-white text-sm p-2 rounded-xl shadow-md shadow-[#694F8E] max-xs:w-full"
                  onClick={() => {
                    setEodState(!eodState);
                  }}
                >
                  View EOD
                </button>
              </td>
              <td className="p-2 text-start flex gap-3">
                <button className="w-3/12 text-center font-bold  text-sm p-2 rounded-xl shadow-md shadow-[#098100] border-2 border-[#098100] max-xs:w-full">
                  Full
                </button>
                <button className="w-3/12 bg-[#CAB200] text-center font-bold text-white text-sm p-2 rounded-xl shadow-md shadow-[#CAB200] max-xs:w-full">
                  Half
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {eodState && (
        <div className="w-full absolute top-10 left-0 flex justify-center items-center">
          <div className="w-5/12 p-5 bg-white border rounded-xl shadow-lg max-xs:w-11/12">
            <div className="w-full">
              <h2 className="font-bold">Today Tasks:</h2>
              <p className="text-sm">Keykoders App Design</p>
            </div>
            <div className="w-full pt-4">
              <h2 className="font-bold">Challenges Faced:</h2>
              <p className="text-sm">Creating components for designing</p>
            </div>
            <div className="w-full pt-4">
              <h2 className="font-bold">Planned tasks for tomorrow:</h2>
              <p className="text-sm">Creating components for designing</p>
            </div>
            {/* <div className="w-full pt-4">
            <h2 className="font-bold text-center pt-10">
              EOD report pending submission
            </h2>
            <h2 className="font-bold text-center pb-10"> submission</h2>
          </div> */}
            <div className="w-full pt-5">
              <button
                className="w-full bg-[#694F8E] text-center font-bold text-white text-sm p-2 rounded-xl shadow-md shadow-[#694F8E] "
                onClick={() => {
                  setEodState(!eodState);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ManageTeam;
