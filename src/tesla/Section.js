import React from "react";

function Section(props) {
  return (
    <div
      className="section"
      style={{ backgroundImage: "url(images/" + props.backgroundImg + ")" }}
    >
      <div className="car">
        <h1>{props.carName}</h1>
        <div className="cta">
          <a href="">{props.leftBtn}</a>
          <a href="">{props.rightBtn}</a>
        </div>
        {props.arrow && <img className="arrow" src="images/down-arrow.svg" />}
      </div>
    </div>
  );
}

export default Section;
