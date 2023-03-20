import React, { useContext } from "react";
import UserContext from "../context/userContext";
import CloseIcon from "@mui/icons-material/Close";

const Register = () => {
  const con = useContext(UserContext);

  return (
    <div
      className={`${con.checkReg} bg-slate-800 w-screen h-screen z-10 items-center`}
    >
      <div
        className="bg-red-500 w-screen fixed h-screen z-20"
        onClick={() => con.setCheckReg("hidden")}
      ></div>
      <CloseIcon
        className="rounded-full bg-slate-100 text-gray-500 z-30 absolute items-center left-0 right-0 mx-auto top-24 hover:shadow-md hover:cursor-pointer text-center"
        onClick={() => con.setCheckReg("hidden")}
      />
      <div className="h-screen w-screen flex items-center">
        <div
          className={`flex justify-center w-52 h-auto rtl flex-col mx-auto my-auto p-5 shadow-md bg-white !z-30 rounded-md`}
        >
          <input
            type="text"
            placeholder="نام و نام خانوادگی خود را وارد کنید"
            className="mb-3"
          />
          <input
            type="email"
            placeholder="ایمیل خود را وارد کنید"
            className="mb-3"
          />
          <input
            type="password"
            placeholder="رمز خود را وارد کنید"
            className="mb-3"
          />
          <button type="submit">ثبت نام</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
