import HeaderBanner from "./recipe-header.png";

const DesktopHeader = () => {
  return (
    <>
      <img src={HeaderBanner} />
      <div className="navigation">
        <ul>
          <li>Home</li>
          <li>Recipes</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </>
  );
};

export default DesktopHeader;
