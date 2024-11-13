import React from "react";
import profile from "../assets/images/profile.png";

const EmployeeProfile = () => {
  return (
    <section className="w-full h-full p-4 ">
      <div className="w-full">
        <h3 className="text-[#694F8E] text-xl font-bold">Employee Profile</h3>
      </div>
      <div className="w-full pt-6">
        <div className="w-full flex justify-center items-center pb-4">
          <img src={profile} alt="Profile Image" />
        </div>
        <div className="w-full pt-6 px-28 flex justify-center max-xs:px-8">
          <div className="w-6/12 border-r-2 max-xs:w-full max-xs:border-r-0">
            <div className="w-full flex">
              <h2 className="w-6/12 font-bold max-xs:border-r border-black">
                Employee ID
              </h2>
              <p className="w-6/12 max-xs:ps-6">K20240519</p>
            </div>
            <div className="w-full flex pt-3">
              <h2 className="w-6/12 font-bold max-xs:border-r border-black">
                Name
              </h2>
              <p className="w-6/12 max-xs:ps-6">Abimanyu</p>
            </div>
            <div className="w-full flex pt-3">
              <h2 className="w-6/12 font-bold max-xs:border-r border-black">
                Role
              </h2>
              <p className="w-6/12 max-xs:ps-6">TECH</p>
            </div>
            <div className="w-full flex pt-3">
              <h2 className="w-6/12 font-bold max-xs:border-r border-black">
                Mobile Number
              </h2>
              <p className="w-6/12 max-xs:ps-6">12345 67890</p>
            </div>
            <div className="w-full flex xs:hidden pt-3">
              <h2 className="w-6/12 font-bold max-xs:border-r border-black">
                Email ID
              </h2>
              <p className="w-6/12 max-xs:ps-6">aaa@gmail.com</p>
            </div>
            <div className="w-full flex pt-3 xs:hidden">
              <h2 className="w-6/12 font-bold max-xs:border-r border-black">
                HR
              </h2>
              <p className="w-6/12 max-xs:ps-6">Arun Viswanathan</p>
            </div>
            <div className="w-full flex pt-3 xs:hidden">
              <h2 className="w-6/12 font-bold max-xs:border-r border-black">
                Manager
              </h2>
              <p className="w-6/12 max-xs:ps-6">Surya</p>
            </div>
          </div>
          <div className="w-6/12 ps-20 max-xs:hidden">
            <div className="w-full flex">
              <h2 className="w-6/12 font-bold">Email ID</h2>
              <p className="w-6/12">aaa@gmail.com</p>
            </div>
            <div className="w-full flex pt-3">
              <h2 className="w-6/12 font-bold">HR</h2>
              <p className="w-6/12">Arun Viswanathan</p>
            </div>
            <div className="w-full flex pt-3">
              <h2 className="w-6/12 font-bold">Manager</h2>
              <p className="w-6/12">Surya</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeProfile;
