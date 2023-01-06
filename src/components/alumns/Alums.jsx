import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import AdmissionDescription from "../default/AdmissionDescription";
import Header from "../default/Header";
import Footer from "../footer/Footer";
import { titleOption } from "./const";
import Options from "./Options";
import Ratings from "./Ratings";
import SignOff from "./SignOff";
import Start from "./Start";
import StudentOptions from "./StudentOptions";

const validar =
  "https://www.saes.cecyt4.ipn.mx/BotDetectCaptcha.ashx?get=image&c=c_default_ctl00_leftcolumn_loginuser_logincaptcha&t=91f591cbc692446ebbc901eb14bc46e6&d=1672880376914";
const Alums = () => {
  const { pathname } = useLocation();
  return (
    <div className="w-[938px] mx-auto">
      <Header />
      <Options />
      <section className="flex justify-between ">
        <div className="bg-color-lead-section w-[150px] border-[1px] border-white pt-7">
          <Routes>
            <Route path="/" element={<StudentOptions />} />
            <Route path="/Alumnos" element={<StudentOptions />} />
            <Route path="/Calificaciones" element={<StudentOptions />} />
            <Route path="/Inicio" element={<SignOff />} />
          </Routes>
        </div>
        <div className="bg-color-lead-section flex-1 border-[1px] border-white">
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/Alumnos" element={<Start />} />
            <Route path="/Calificaciones" element={<Ratings />} />
            <Route path="/Inicio" element={<AdmissionDescription />} />
          </Routes>
        </div>
        <div className="bg-color-lead-section w-[150px] border-[1px] border-white">
          <div className="bg-color-lead-section2 mt-10  border-[1px] border-white mx-1">
            <h2 className="md:text-[24px] text-[10px] leading-none">
              Accesos rápidos
            </h2>
            <h2 className="text-color-red text-[8.5px] underline cursor-pointer pt-6">
              Agenda escolar
            </h2>
            <h2 className="text-color-red text-[8.5px] underline cursor-pointer">
              Horarios de clases
            </h2>
            <h2 className="text-color-red text-[8.5px] underline cursor-pointer">
              Horarios de ETS
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alums;
