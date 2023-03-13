import React, { useState } from "react";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
import Database from "../Database.js";
import { Link } from "react-router-dom";
import Productbox from "../Productbox.jsx";

function Vitrin() {
  Database.sort((a, b) => b.click - a.click);

  return (
    <div>
      <Header />
      <div style={{ height: "80vh" }}>
        <h2 className="mx-auto text-center mt-9">ویترین محصولات تٌرب</h2>

        <div className="flex justify-center flex-row h-full content-center w-3/4 mx-auto flex-wrap overflow-y-auto items-center">
          {Database.map((i, index) => {
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
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Vitrin;