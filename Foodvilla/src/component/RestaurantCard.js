import React from "react";
import { useNavigate } from "react-router-dom";
import routeconstant from "../Routing/Routeconstant";
import { IMG_CDN_URL } from "./Constant";
const RestaurantCard = (props) => {
  const navigation = useNavigate();
  return (
    <div
      className="card me-3"
      style={{ width: "18rem" }}
      onClick={() => {
        navigation(routeconstant.ABOUT);
      }}
    >
      <img
        src={IMG_CDN_URL + props.item.data.cloudinaryImageId}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.item.data.name}</h5>
        <p className="card-text">{props.item.data.cuisines.join(", ")}</p>
        <p className="card-text">{props.item.data.lastMileTravelString}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
