import React from "react";

const EmployeeEODReport = () => {
  return (
    <section className="w-full h-screen p-4 pb-28 overflow-y-scroll no-scrollbar">
      <div>
        <h3 className="text-[#694F8E] text-xl font-bold">EOD Report</h3>
      </div>
      <div className="w-full pt-6">
        <form className="w-full">
          <div className="w-full">
            <label htmlFor="task" className="block font-bold text-md pb-2">
              Enter your today's tasks:
            </label>
            <textarea
              name="task"
              placeholder="Enter today tasks..."
              className="w-6/12 h-20 rounded-xl border-2 border-[#694F8E] max-xs:w-full"
            ></textarea>
          </div>
          <div className="w-full">
            <label htmlFor="task" className="block font-bold text-md py-2">
              What are the challenges you faced ?
            </label>
            <textarea
              name="task"
              placeholder="Enter the challenges you faced..."
              className="w-6/12 h-20 rounded-xl border-2 border-[#694F8E] max-xs:w-full"
            ></textarea>
          </div>
          <div className="w-full">
            <label htmlFor="task" className="block font-bold text-md py-2">
              Enter your planned tasks for tomorrow:
            </label>
            <textarea
              name="task"
              placeholder="Enter tomorrow tasks..."
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

export default EmployeeEODReport;
