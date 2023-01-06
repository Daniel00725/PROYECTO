import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Options = () => {
  const optionesTitle = ["Academia", "Ayuda", "Recuperar Contraseña"];

  return (
    <div className="flex pl-[150px] bg-default-while text-lg">
      <NavLink
        to={`/default/Inicio`}
        className={({ isActive }) =>
          isActive
            ? "text-[18px]  border-[0.1px] border-white px-2 bg-color-yellow hover:text-color-red text-white"
            : "text-[18px] bg-color-lead-options border-[0.1px] border-white px-2 hover:text-color-red "
        }>
        Inicio
      </NavLink>
      <NavLink
        to={`/default/Alumnos`}
        className={({ isActive }) =>
          isActive
            ? "text-[18px]  border-[0.1px] border-white px-2 bg-color-yellow hover:text-color-red hover:bg-color-lead-options text-white"
            : "text-[18px] bg-color-lead-options border-[0.1px] border-white px-2 hover:text-color-red"
        }>
        Alumnos
      </NavLink>
      {optionesTitle.map((title, index) => (
        <div
          key={index}
          className="text-[18px] bg-color-lead-options border-[0.1px] border-white px-2 cursor-pointer hover:text-color-red">
          {title}
        </div>
      ))}
    </div>
  );
};

export default Options;
