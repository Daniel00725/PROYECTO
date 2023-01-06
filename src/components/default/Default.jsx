import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AdmissionDescription from "./AdmissionDescription";
import Header from "./Header";
import Options from "./Options";
const validar =
  "https://www.saes.cecyt4.ipn.mx/BotDetectCaptcha.ashx?get=image&c=c_default_ctl00_leftcolumn_loginuser_logincaptcha&t=91f591cbc692446ebbc901eb14bc46e6&d=1672880376914";
const Default = () => {
  const navigate = useNavigate();
  return (
    <div className=" md:w-[948px]  w-[100%]  mx-auto  ">
      <Header />
      <Options />
      <section className="flex justify-between ">
        <div className="bg-color-lead-section  md:w-[150px] w-[80px]  border-[1px] border-white ">
          <div className="bg-color-lead-section2 mt-10 border-[1px] border-white mx-1 pl-2">
            <h2 className="md:text-[16px] text-[10px] font-sans_rif font-bold">
              Iniciar Sesion
            </h2>
            <div>
              <div className="flex md:text-[12.5px] sm:text-[14px] text-[10px] text:[10px] font-semibold">
                <h2 className="underline">U</h2> suario
              </div>
              <input className="md:w-[115px] w-[60px] border-[0.2px] border-slate-500 "></input>
            </div>
            <div>
              <h2 className="flex md:text-[12px] sm:text-[14px] text-[10px] text:[10px] font-semibold">
                <h2 className="underline">P</h2> assword:
              </h2>
              <input className="md:w-[115px] w-[60px] border-[0.2px] border-slate-500 "></input>
            </div>
            <div>
              <h2 className="flex md:text-[12px] sm:text-[14px] text-[10px] text:[10px] font-semibold">
                <h2 className="underline">C</h2> aptcha
              </h2>
              <input className="md:w-[115px] w-[60px] md:h-[27px] h-[20px] border-[0.2px] border-slate-500 md:text-[12px] text-[8px]"></input>
            </div>
            <div className="  text-center pt-4">
              <div className="flex">
                <img className="w-[90px] h-[40px]" src={validar} />
                <button>
                  <img src="https://www.saes.cecyt4.ipn.mx/BotDetectCaptcha.ashx?get=ReloadIcon" />
                </button>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => {
                    setTimeout(function () {
                      navigate("/default");
                    }, 1500);
                  }}
                  className="bg-color-yellow px-1 text-white mt-3 mb-2">
                  Iniciar
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <AdmissionDescription />
        </div>
        <div className="bg-color-lead-section md:w-[150px] w-[80px] border-[1px] border-white ">
          <div className="bg-color-lead-section2 mt-10  border-[1px] border-white mx-1 md:text-[12.5px] text-[8px]">
            <h2 className="md:text-[24px] text-[10px] leading-none">
              Accesos rápidos
            </h2>
            <h2 className="text-color-red  underline cursor-pointer pt-6">
              Agenda escolar
            </h2>
            <h2 className="text-color-red  underline cursor-pointer">
              Horarios de clases
            </h2>
            <h2 className="text-color-red  underline cursor-pointer">
              Horarios de ETS
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Default;
