import React from "react";

const Navbar = (props) => {
  return (
    <header className="d-flex flex-row justify-content-around align-items-center ps-5 pe-5">
      <button
        className="btn btn-lg btn-plain"
        onClick={() => props.setMenuOpen(true)}
      >
        <span className="material-icons h1 text-secondary">menu</span>
      </button>
      <h1 className="flex-grow-1" onClick={() => (window.location = "/")}>
        A
      </h1>
      <button
        className="btn btn-lg btn-plain"
        onClick={() => {
          props.darkTheme
            ? props.setDarkTheme(false)
            : props.setDarkTheme(true);
        }}
      >
        <span className="material-icons-outlined h1">
          {props.darkTheme ? "dark_mode" : "light_mode"}
        </span>
      </button>
    </header>
  );
};

export default Navbar;
