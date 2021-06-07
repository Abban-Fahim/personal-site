import Navbar from "./Navbar";
import Intro from "./Pages/Intro";
import AppsPage from "./Pages/AppsPage";
import SideMenu from "./SideMenu";
import { useEffect, useState } from "react";
import Footer from "./FooterSVG";
import Error404 from "./Pages/Error404";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [url] = useState(window.location.pathname);
  const [page, setPage] = useState(null);

  useEffect(() => {
    console.log(url);
    switch (url) {
      case "/":
        setPage(<Intro />);
        break;
      case "/apps":
        setPage(<AppsPage />);
        break;
      default:
        setPage(<Error404 />);
        break;
    }
  }, [url]);

  return (
    <div className={darkTheme ? "dark" : null}>
      <SideMenu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <Navbar
        setMenuOpen={setMenuOpen}
        setDarkTheme={setDarkTheme}
        darkTheme={darkTheme}
      />
      {page}
      <Footer />
    </div>
  );
}

export default App;
