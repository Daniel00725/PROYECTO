import React from "react";

const Options = () => {
  const optionesTitle = ["Ayuda", "Recuperar Contraseña"];
  return (
    <div className="flex md:pl-[150px] pl-[80px]  bg-default-while font-sans_rif font-normal ">
      <h2 className="md:text-[18px] text-[14px] hover:bg-color-lead-options hover:text-color-red-link  hover:underline border-[0.1px] border-white px-2 cursor-pointer bg-color-yellow">
        Inicio
      </h2>
      {optionesTitle.map((title, index) => (
        <h2
          key={index}
          className="md:text-[18px] text-[12px] bg-color-lead-options border-[0.1px] border-white px-2 cursor-pointer hover:text-color-red-link  hover:underline">
          {title}
        </h2>
      ))}
    </div>
  );
};

export default Options;
