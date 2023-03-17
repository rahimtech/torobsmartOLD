import React, { useContext } from "react";
import UserContext from "../context/userContext";

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
      <div className="h-screen w-screen flex items-center">
        <div
          className={`flex justify-center flex-col mx-auto my-auto w-28 h-36 shadow-md bg-white !z-30 rounded-md`}
        >
          <input
            type="text"
            placeholder="نام و نام خانوادگی خود را وارد کنید"
          />
          <input type="email" placeholder="ایمیل خود را وارد کنید" />
          <input type="password" placeholder="رمز خود را وارد کنید" />
          <button type="submit">ثبت نام</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
