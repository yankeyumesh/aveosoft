import React from "react";
import "./CardDesc.css";

import image from "../../assets/img.jpg";

const CardDesc = (props) => {
  return (
    <>
      <div className="product__details">
        <div className="container__card">
          <img src={image} />
          <div className="container__text">
            <h1>{props.name}</h1>
            <div className="container__text__star">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </div>
            <p>{props.desc}</p>
            <div className="container__text__timing">
              <div className="container__text__timing_time">
                <p>Price</p>
                <h5>{props.price} INR</h5>
              </div>
              <div className="container__text__timing_time">
                <p>Model</p>
                <h5>{props.model}</h5>
              </div>
              <div className="container__text__timing_time">
                <p>Category</p>
                <h5>{props.category}</h5>
              </div>
            </div>
            <button className="btn">
              Add To Cart <i className="fa fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDesc;
