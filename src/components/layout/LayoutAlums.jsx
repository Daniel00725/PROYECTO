import React from "react";
import { useLocation } from "react-router-dom";
import Alums from "../alumns/Alums";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const LayoutAlums = () => {
  const { pathname } = useLocation();
  if (pathname === "/default/Inicio") {
  }
  return (
    <div className=" ">
      {pathname === "/default/Inicio" ? (
        <div className="fixed w-full z-20">
          <Header />
        </div>
      ) : (
        ""
      )}
      <div className={`${pathname === "/default/Inicio" ? "pt-14" : ""}`}>
        <Alums />
      </div>
    </div>
  );
};

export default LayoutAlums;
