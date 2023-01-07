import React from "react";
import cecytU from "../../assets/cecytU.png";

const Start = () => {
  return (
    <div className="bg-color-lead-section flex-1 border-[1px] border-white">
      <div className="text-[12px] py-2 pl-2 flex">
        {" "}
        <div className="text-color-red underline pl-2 pr-2">Inicio</div> Alumnos
      </div>
      <div className="border-[1px] border-slate-500 bg-white ">
        <div className="flex mx-4 pt-10 justify-between">
          <div className="flex w-[50%] flex-col">
            <h2 className="flex justify-end font-bold ">
              MENÚ PRINCIPAL DE ALUMNOS
            </h2>
            <div className="flex-1 pt-14">
              <h2 className="flex-1 flex justify-end text-[rgb(128,0,0)] text-sm font-sans_rif font-extrabold text-[14px]">
                BUENOS NOCHES
              </h2>
              <h2 className="flex-1 flex justify-end text-[rgb(108,29,69) font-sans_rif font-extrabold text-[14px]">
                JIMENEZ RODRIGUEZ MARIA PAOLA
              </h2>
            </div>
          </div>

          <div className="pt-10">
            <img className="w-28 h-28 object-cover" src={cecytU} />
          </div>
        </div>
        <img
          src="https://www.saes.cecyt4.ipn.mx/aviso_seg_2014.png"
          className="pt-10"
        />
        <img
          src="https://www.saes.cecyt4.ipn.mx/Images/sliderDenuncia.jpg"
          alt=""
          className="pt-2 px-4 pb-24"
        />
      </div>
      <div className="border-[1px] border-slate-500 bg-white flex gap-2 mt-10">
        <h2 className="text-slate-600">© 2008 SAES</h2>
        <h2 className="text-color-red-link underline">IPN</h2>
        <h2 className="text-color-red-link underline">IPN-DAE</h2>
      </div>
    </div>
  );
};

export default Start;
