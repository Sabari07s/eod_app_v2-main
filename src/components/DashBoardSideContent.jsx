import React from "react";

const DashBoardSideContent = () => {
  return (
    <div className="w-5/12 h-screen px-4 py-2 pb-28 max-xs:hidden overflow-y-scroll no-scrollbar ">
      <div className="text-justify">
        <h2 className="text-[#694F8E] text-xl font-bold">EOD Report</h2>
        <p className="pt-4 text-justify">
          <span className="text-[#FF0000]">Attention: &nbsp;</span>
          Your attendance for today will not be marked because the End of the
          Day (EOD) report has not been submitted
        </p>
        <p className="pt-1">
          <span className="text-[#FF0000]">Note: &nbsp;</span>
          Failure to submit the EOD report may affect your attendance status and
          could lead to issues with leave balances and payroll processing.
        </p>
        <p className="pt-4">
          If you have any questions or need assistance, please contact your
          manager or the HR department.
        </p>
      </div>
      <div className="text-justify pt-4">
        <h2 className="text-[#694F8E] text-xl font-bold">Track Progress</h2>
        <p className="pt-4">
          Monitor the progress and performance of your daily activities and
          accomplishments. View detailed summaries of each day's activities.
        </p>
      </div>
      <div className="text-justify pt-4">
        <h2 className="text-[#694F8E] text-xl font-bold">Request for Leave</h2>
        <p className="pt-4 text-justify">
          <span className="text-[#FF0000]">Overview: &nbsp;</span>
          Use this page to apply for leave by filling out the necessary details
          and submitting your request. Your leave request will be sent to the
          appropriate hierarchy for approval.
        </p>
        <p className="pt-1">
          <span className="text-[#FF0000]">Submission: &nbsp;</span>
        </p>
        <ol className="list-disc list-inside">
          <li>
            Click the "Submit" button to send your leave request for approval.
          </li>
          <li>
            You will receive a confirmation email once your request has been
            successfully submitted.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default DashBoardSideContent;
