import React from "react";
import Button from "@mui/material/Button";

function Header() {
  return (
    <header>
      <div className="bg-gray-50 w-100 flex justify-between px-10 py-2 ">
        <div id="left">
          <Button
            className="!text-gray-500 !border-gray-300"
            variant="outlined"
            size="small"
          >
            ثبت‌نام / ورود
          </Button>
        </div>
        <div id="right">
          <ul className="list-none flex justify-between  ">
            <li>
              <Button
                className="hover:!text-red-600 hover:!bg-red-50 !text-gray-500"
                color="inherit"
                size="medium"
              >
                خوراک
              </Button>
            </li>
            <li>
              <Button
                className="hover:!text-red-600 hover:!bg-red-50 !text-gray-500"
                color="inherit"
                size="medium"
              >
                پوشاک
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
