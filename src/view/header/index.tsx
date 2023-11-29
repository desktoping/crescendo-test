import "./header.css";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import DesktopHeader from "./desktop";
import MobileHeader from "./mobile";

const Header = () => {
  const isDesktop = useMediaQuery("(min-width: 1000px)");

  return (
    <header className="header-container">
      {isDesktop ? <DesktopHeader /> : <MobileHeader />}
    </header>
  );
};

export default Header;
