import React from "react";
import Productbox from "../Productbox.jsx";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
import Database from "../Database.js";
import { Link, useParams } from "react-router-dom";
import { motion as M } from "framer-motion";

function Product() {
  const { serip } = useParams();
  const { idp } = useParams();
  Database.find((item) => {
    if (item.id === idp) {
      item.click += 1;
    }
  });
  return (
    <div>
      <Header />
      <M.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ minHeight: "100vh" }}
      >
        <h2 className="mx-auto text-center my-9">محصولات مشابه</h2>
        <div id="center" className=" flex justify-evenly">
          <div id="left" className="w-4/12">
            <div className="w-full h-36 bg-white text-center flex justify-center flex-wrap">
              <h3 className="w-full">آخرین تغییرات قیمت</h3>
              <canvas className="w-full h-2/4 bg-red-300 mx-1"></canvas>
            </div>
          </div>
          <div id="right" className="w-6/12">
            <div className="flex w-full h-full bg-white justify-evenly items-center">
              <div id="left" className="rtl">
                <h3>اسم محصول</h3>
                <p>توضیحات درباره این محصول</p>
              </div>
              <div id="right" className="r-0">
                <img src={Database[0].image} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-row h-full content-center w-3/4 mx-auto flex-wrap overflow-y-auto items-center">
          {Database.map((i, index) => {
            if (i.seri === serip) {
              return (
                <Link to={`/product/${i.seri}/${i.id}/${i.name}`}>
                  <Productbox
                    key={index}
                    image={i.image}
                    name={i.name}
                    price={i.price}
                  />
                </Link>
              );
            }
          })}
        </div>
      </M.div>

      <Footer />
    </div>
  );
}

export default Product;
