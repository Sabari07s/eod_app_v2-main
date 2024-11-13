import React from "react";
import brand from "../assets/images/brand_logo.png";
import profile from "../assets/images/profile.png";
import { Icon } from "@iconify/react/dist/iconify.js";

const SignUp = () => {
  return (
    <section className="w-full h-full bg-gradient-to-b from-[#694F8E] to-black flex justify-center items-center pt-20 max-xs:pt-0">
      <div className="w-3/12 bg-white flex flex-col items-center rounded-3xl p-5 max-xs:w-11/12 relative">
        <div className="flex justify-center pt-2 ">
          <img src={brand} alt="LOGO" className="w-8/12" />
        </div>
        <div className="">
          <h1 className="font-bold text-4xl">SIGN UP</h1>
        </div>
        <form className="pt-5">
          <div className="pb-3">
            <div className="border-2 border-[#694F8E] flex items-center rounded-xl px-3 py-px h-10 overflow-hidden">
              <Icon icon="mingcute:user-3-line" fontSize={25} color="black" />
              <input
                type="text"
                placeholder="Name"
                className="w-60 border-none rounded-xl focus:ring-0"
              />
            </div>
          </div>
          <div className="pb-3">
            <div className="border-2 border-[#694F8E] flex items-center rounded-xl px-3 py-px h-10 overflow-hidden">
              <Icon
                icon="material-symbols:alternate-email"
                fontSize={25}
                color="black"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-60 border-none rounded-xl focus:ring-0"
              />
            </div>
          </div>
          <div className="pb-3">
            <div className="border-2 border-[#694F8E] flex items-center rounded-xl px-3 py-px h-10 overflow-hidden">
              <Icon icon="gridicons:phone" fontSize={25} color="black" />
              <input
                type="tel"
                placeholder="Phone"
                className="w-60 border-none rounded-xl focus:ring-0"
              />
            </div>
          </div>
          <div className="">
            <div className="border-2 border-[#694F8E] flex items-center rounded-xl px-3 py-px h-10 overflow-hidden">
              <Icon
                icon="eos-icons:role-binding-outlined"
                fontSize={25}
                color="black"
              />
              <select className="w-60 border-none rounded-xl focus:ring-0">
                <option value="selct role" defaultValue={"Select Role"}>
                  Select Role
                </option>
              </select>
            </div>
          </div>
          <div className="w-full mt-6 flex justify-center">
            <button className="w-full bg-[#694F8E] text-center font-bold text-white text-sm p-2 rounded-xl shadow-md shadow-[#694F8E] ">
              Sign Up
            </button>
          </div>
        </form>
        <div className="pt-2">
          <p>
            You are already a user? &nbsp;
            <span className="font-bold text-[#694F8E] cursor-pointer">
              Log in
            </span>
          </p>
        </div>
        <div className="absolute -top-20 size-32 bg-white shadow-xl rounded-full">
          <img src={profile} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
