import React from "react";
import brand from "../assets/images/brand_logo.png";
import profile from "../assets/images/profile.png";
import { Icon } from "@iconify/react/dist/iconify.js";

const Login = () => {
  return (
    <section className="w-full h-full bg-gradient-to-b from-[#694F8E] to-black flex justify-center items-center ">
      <div className="w-3/12 bg-white flex flex-col items-center rounded-3xl p-5 max-xs:w-11/12 relative">
        <div className="flex justify-center pt-2 ">
          <img src={brand} alt="LOGO" className="w-8/12" />
        </div>
        <div className="">
          <h1 className="font-bold text-4xl">LOGIN</h1>
        </div>
        <form className="pt-10">
          <div className="pb-5">
            <div className="border-2 border-[#694F8E] flex items-center rounded-xl px-3 py-px h-10 overflow-hidden">
              <Icon icon="clarity:id-badge-solid" fontSize={25} color="black" />
              <input
                type="text"
                placeholder="Employee ID"
                className="w-60 border-none rounded-xl focus:ring-0"
              />
            </div>
          </div>
          <div className="">
            <div className="border-2 border-[#694F8E] flex items-center rounded-xl px-3 py-px h-10 overflow-hidden">
              <Icon icon="mdi:password-outline" fontSize={25} color="black" />
              <input
                type="password"
                placeholder="Password"
                className="w-60 border-none rounded-xl focus:ring-0"
              />
            </div>
          </div>
          <div className="w-full mt-6 flex justify-center">
            <button className="w-full bg-[#694F8E] text-center font-bold text-white text-sm p-2 rounded-xl shadow-md shadow-[#694F8E] ">
              Login
            </button>
          </div>
        </form>
        <div className="pt-2">
          <p>
            You are a fresh user?{" "}
            <span className="font-bold text-[#694F8E] cursor-pointer">
              Sign Up
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

export default Login;
