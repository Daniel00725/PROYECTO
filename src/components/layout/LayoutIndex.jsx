import React from "react";
import Default from "../default/Default";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const LayoutIndex = () => {
  return (
    <div>
      <div className="fixed w-full z-10">
        <Header />
      </div>
      <div className="pt-[60px] bg-color-lead-body ">
        <Default />
      </div>
      <Footer />
    </div>
  );
};

export default LayoutIndex;
