import React, { useContext } from "react";
import "./Card.css";

import image from "../../assets/img.jpg";

const Card = (props) => {
  return (
    <>
      <img src={image} className="card__image" />
      <div className="card__overlay">
        <div className="card__header">
          <div className="card__header-text">
            <h3 className="card__title">{props.name}</h3>
          </div>
        </div>
        <p className="card__description ">
          <span className="h5 mx-2">{props.modal}</span>
          <button className="btn btn-primary btn-sm">
            <span className="h5">{props.price} INR</span>
          </button>
        </p>
      </div>
    </>
  );
};

export default Card;
