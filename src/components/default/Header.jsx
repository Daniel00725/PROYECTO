import React from "react";
import logoU from "../../assets/logoU.png";
import cecytU from "../../assets/cecytU.png";
import aU from "../../assets/aU.png";
import cuadroU from "../../assets/cuadroU.png";
const Header = () => {
  return (
    <main className="flex justify-between md:h-[70px] h-[60px] bg-default-while border-b border-red-600">
      <div className="relative">
        <div className="">
          <img src={logoU} className="md:h-[71px] sm:h-[60px] h-[45px]" />
        </div>
      </div>
      <div className="text-center text-red-700 font-bold pt-2 md:text-[18px] sm:text-[16px] text-[10px]">
        <h2>CENTRO DE ESTUDIOS CIENTÍFICOS Y TECNOLÓGICOS No. 4</h2>
        <h2>LAZARO CARDENAS</h2>
      </div>
      <div className="flex ">
        <img src={cecytU} className="md:h-[71px] sm:h-[60px] h-[45px]" />
        <div className="flex flex-col">
          <img src={aU} className="md:h-[30px] sm:h-[30px] h-[15px]" />
          <img src={cuadroU} className="md:h-[30px] sm:h-[30px] h-[15px]" />
        </div>
      </div>
    </main>
  );
};

export default Header;
