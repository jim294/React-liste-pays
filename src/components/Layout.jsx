import React from "react";
import backgroundImage from "../images/ciel-etoile.jpg";

const Layout = ({ children }) => {
  const layoutStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  };

  return <div style={layoutStyle}>{children}</div>;
};

export default Layout;
