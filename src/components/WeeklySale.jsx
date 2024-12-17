import React from "react";
import "../sass/weeklySale.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Timer from "./Timer";

const WeeklySale = () => {
  return (
    <div className="mainBox">
  <div className="row">
  <div className="left col-md-6">
        <img
          src="https://themewagon.github.io/aranoz/img/offer_img.png"
          alt="Weekly Sale Banner"
          className="img-fluid"
        />
      </div>

      <div className="right col-md-6">
        <div className="saleBox"><span>Weekly Sale on 60% Off All Products</span></div>
        <div className="timer">
          <Timer/>
        </div>
      </div>
  </div>
    </div>
  );
};

export default WeeklySale;
