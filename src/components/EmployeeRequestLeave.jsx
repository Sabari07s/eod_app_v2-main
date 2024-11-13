import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const EmployeeRequestLeave = () => {
  return (
    <section className="w-full h-screen p-4 pb-28 overflow-y-scroll no-scrollbar">
      <div>
        <h3 className="text-[#694F8E] text-xl font-bold">Request for Leave</h3>
      </div>
      <div className="w-full pt-6">
        <form className="w-full">
          <div className="w-full">
            <label htmlFor="task" className="block font-bold text-md pb-4">
              Leave Period:
            </label>
            <input
              type="date"
              name="task"
              className="w-6/12  rounded-xl border-2 border-[#694F8E] max-xs:w-full"
            />
          </div>
          <div className="w-100 py-5">
            <div className="w-6/12 flex justify-center max-xs:w-full">
              <Icon
                icon="fluent:arrow-sort-16-filled"
                fontSize={30}
                color="black"
              />
            </div>
          </div>
          <div className="w-full pb-5">
            <input
              type="date"
              name="task"
              className="w-6/12  rounded-xl border-2 border-[#694F8E] max-xs:w-full"
            />
          </div>
          <div className="w-full">
            <label htmlFor="task" className="block font-bold text-md py-2">
              Reason for the leave:
            </label>
            <textarea
              name="task"
              placeholder="Enter the reason for your leave"
              className="w-6/12 h-20 rounded-xl border-2 border-[#694F8E] max-xs:w-full"
            ></textarea>
          </div>
          <div className="w-full mt-6 ">
            <button
              type="submit"
              className="w-6/12 bg-[#694F8E] text-center font-bold text-white text-sm p-2 rounded-xl shadow-md shadow-[#694F8E] max-xs:w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmployeeRequestLeave;
