import Link from "next/link";
import React from "react";

const Navbar = ({theme, setTheme, setSideBar, ...props}) => {
  console.log(props);
  return (
    <header>
      <button className="icon" onClick={() => setSideBar(true)}>
        <i className="bi bi-list" />
      </button>
      <Link href="/"><h1>A</h1></Link>
      <button className="icon" onClick={()=>{theme === "dark" ? setTheme("light") : setTheme("dark")}}>
        <i className={`bi h1 bi-${theme === "dark" ? "moon" : "sun"}`} />
      </button>
    </header>
  );
};

export default Navbar;
