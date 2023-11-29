import "./loader.css";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 300,
      }}
    >
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default Loader;
