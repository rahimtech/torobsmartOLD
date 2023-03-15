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
        style={{ height: "80vh" }}
      >
        <h2 className="mx-auto text-center mt-9">محصولات مشابه</h2>
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
