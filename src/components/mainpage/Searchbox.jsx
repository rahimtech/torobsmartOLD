import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../../image/torob_logo.svg";
import { Link } from "react-router-dom";

function Searchbox() {
  return (
    <section style={{ height: "80vh" }}>
      <div className="flex h-full justify-center items-center">
        {/* this is Search Input */}
        <div>
          <div className="flex justify-center mb-5">
            <img src={Logo} alt="ترب"></img>
          </div>
          <input
            type="text"
            className="rtl rounded-md w-96 py-2 pr-7  border-gray-400"
            placeholder="نام کالا را وارد کنید"
          />
          <span className="relative right-7 top-2">
            <Link to="/Vitrin">
              <SearchIcon className="!text-gray-500 hover:cursor-pointer" />
            </Link>
          </span>
          <div className="flex justify-center mt-5 text-gray-400">
            <p>این سایت نمونه‌ای از وبسایت ترب میباشد</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Searchbox;
