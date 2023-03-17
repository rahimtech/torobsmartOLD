import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../../image/torob_logo.svg";
import { Link } from "react-router-dom";
import Database from "../Database.js";

const Searchbox = () => {
  const [ajax, setAjax] = useState("mog");
  const [checkSuggest, setCheckSuggest] = useState("hidden");

  const searchsuggest = (e) => {
    String(e);
    setAjax(e);
    let x = parseInt(e.length);
    if (x > 0) {
      setCheckSuggest("block");
    } else {
      setCheckSuggest("hidden");
    }
  };

  return (
    <section style={{ height: "80vh" }}>
      <div className="flex h-full justify-center items-center">
        {/* this is Search Input */}
        <div>
          <div className="flex justify-center mb-5">
            <img src={Logo} alt="ترب"></img>
          </div>
          <div>
            <input
              type="text"
              className="rtl rounded-sm w-96 py-2 pr-7  border-gray-400"
              placeholder="نام کالا را وارد کنید"
              onChange={(e) => searchsuggest(e.target.value)}
            />
            <span className="relative right-7 top-2" title="ویترین محصولات">
              <Link to="/Vitrin">
                <SearchIcon className="!text-gray-500 hover:cursor-pointer" />
              </Link>
            </span>
          </div>
          <div
            className={` absolute searchbox-Horizontal-Size py-1 h-auto rtl ${checkSuggest} bg-white  border-gray-400 border-2 border-solid rounded-sm mt-1 shadow-md`}
          >
            {Database.map((i, index) => {
              if (i.name.indexOf(ajax) > -1) {
                return (
                  <Link
                    className="!no-underline"
                    to={`/product/${i.seri}/${i.id}/${i.name}`}
                  >
                    <p className="pr-2 px-2 py-2	text-gray-600 hover:bg-gray-100 hover:cursor-pointer">
                      {i.name}
                    </p>
                  </Link>
                );
              }
            })}
          </div>

          <div className="flex justify-center mt-5 text-gray-400">
            <p>این سایت نمونه‌ای از وبسایت ترب میباشد</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Searchbox;
