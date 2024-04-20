import React from "react";
import circleIcon from "../assets/circle.png";
import crossIcon from "../assets/cross.png";

const Square = (props) => {
  const boxStyle = {
    width: "100%",
    aspectRatio: "1/1",
    display: "grid",
    placeItems: "center",
    borderRadius: "6px",
    backgroundColor: "#464242",
  };

  return (
    <h1 onClick={props.clickHandler} style={boxStyle}>
      <img src={!props.value ? "" : props.value === "X" ? crossIcon : circleIcon} alt=""/>
    </h1>
  );
};

export default Square;
