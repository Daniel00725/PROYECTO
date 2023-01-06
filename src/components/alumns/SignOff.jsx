import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SignOff = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-color-lead-section2 mt-10 border-[1px] border-white mx-1 pl-2 py-2">
      <button
        onClick={() => {
          setTimeout(function () {
            navigate("/");
          }, 1500);
        }}
        className="text-[16px] text-[rgb(153,0,0)] underline leading-none hover:text-blue-400">
        Cerrar sesión
      </button>
      <h2 className="text-[rgb(255,128,0)]">2021040435</h2>
    </div>
  );
};

export default SignOff;
