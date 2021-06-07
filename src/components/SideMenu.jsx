import React from "react";
import _ from "lodash";
const urls = ["Apps", "Music", "Art"];

const SideMenu = (props) => {
  return (
    <div
      className={`side-menu flex-column justify-content-center align-items-middle ${
        props.menuOpen ? "isVisible" : null
      }`}
    >
      <button
        className="btn btn-lg btn-plain"
        style={{ position: "absolute", top: "50px", right: "50px" }}
        onClick={() => props.setMenuOpen(false)}
      >
        <span className="material-icons h1 text-secondary">close</span>
      </button>
      {urls.map((url) => {
        return (
          <h1 onClick={() => (window.location = `/${_.lowerCase(url)}`)}>
            {url}
          </h1>
        );
      })}
    </div>
  );
};

export default SideMenu;
