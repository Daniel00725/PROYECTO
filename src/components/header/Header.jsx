import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-header-green flex justify-between h-[60px] w-full">
      <div className="flex justify-center items-center gap-10 md:ml-10 ml-2">
        <div className="flex">
          <img
            src="https://framework-gb.cdn.gob.mx/landing/img/logoheader.svg"
            className="w-24"
          />
        </div>
      </div>
      <div className="flex justify-center items-center gap-5 text-white md:mr-32 mr-2">
        <h2>Trámites</h2>
        <h2>Gobierno</h2>
        <img
          src="https://framework-gb.cdn.gob.mx/landing/img/lupa.png"
          alt=""
          className="w-4 h-4"
        />
      </div>
    </div>
  );
};

export default Header;
