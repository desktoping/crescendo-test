import { useState } from "react";

const MobileHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => setMenuOpen(!menuOpen);

  return (
    <nav role="navigation">
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "0px 30px 0px 0px",
        }}
      >
        <div
          id="nav-burger"
          className={menuOpen ? "open" : ""}
          onClick={handleClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={`mobile-menu-container ${menuOpen ? "open" : ""} `}>
        <ul id="menu">
          <li>Home</li>
          <li>Recipes</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileHeader;
