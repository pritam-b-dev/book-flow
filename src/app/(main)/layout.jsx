import React from "react";
import NavBar from "../../components/shared/NavBar";
import Footer from "../../components/shared/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
