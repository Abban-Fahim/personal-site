import React from "react";
import LandingSVG from "../LandingSVG";

const Intro = () => {
  return (
    <div className="intro container-fluid text-center">
      <div className="row">
        <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
          <h2>Hi! My name's</h2>
          <h1 className="text-primary">
            <span>A</span>bban Fahim
          </h1>
          <h2>I'm a web developer</h2>
        </div>
        <LandingSVG />
      </div>
    </div>
  );
};

export default Intro;
