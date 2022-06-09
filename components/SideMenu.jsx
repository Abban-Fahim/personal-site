import Link from "next/link";
const urls = ["Apps", "Music", "Art"];

const SideMenu = ({sideBar, setSideBar, ...props}) => {
  return (
    <div className={`side-menu ${sideBar ? " visible" : ""}`}>
      <button
        className="icon"
        style={{ position: "absolute", top: "35px", left: "30px", zIndex:"20" }}
        onClick={() => setSideBar(false)}
      >
        <i className="bi bi-x-lg" />
      </button>
      {urls.map((url) => {
        return (
          <Link key={url} href={url.toLowerCase()}>
            <h1 onClick={() => setSideBar(false)}>{url}</h1>
          </Link>
        );
      })}
    </div>
  );
};

export default SideMenu;
