import React from "react";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import logoU from "../../assets/logoU.png";
import adornoFooter from "../../assets/adornoFooter.png";

const Footer = () => {
  return (
    <div className=" bg-[rgb(19,50,43)] w-full md:text-[16px] text-[10px]">
      <div className="grid grid-cols-4 justify-between text-white h-[400px] w-full">
        <div className="flex-1 mt-8">
          <img
            src="https://framework-gb.cdn.gob.mx/landing/img/logoheader.svg"
            className="md:w-52 sm:w-40 w-14 ml-4"
          />
        </div>
        <div className=" mt-8 ">
          <h2>Enlace</h2>
          <h3 className="pt-2">Participa</h3>
          <h3>Publicaciones Oficiales</h3>
          <h3>Marco Jurídico</h3>
          <h3>Plataforma Nacional de Transparencia</h3>
          <h3>Alerta</h3>
          <h3>Denuncia</h3>
        </div>
        <div className=" mt-8">
          <h2>¿Qué es gob.mx?</h2>
          <p className="pt-2">
            Es el portal único de trámites, información y participación
            ciudadana. Leer más
          </p>
          <p className="pt-2">
            Portal de datos abiertos Declaración de accesibilidad Aviso de
            privacidad integral Aviso de privacidad simplificado Términos y
            Condiciones Política de seguridad Mapa de sitio
          </p>
        </div>
        <div className=" mt-8">
          <h2>Denuncia contra servidores públicos</h2>
          <h3 className="pt-2">Síguenos en</h3>
          <div className="flex gap-5 pt-10">
            <img src={facebook} className="w-3 invert md:scale-100 scale-50" />
            <img src={twitter} className="w-3 invert md:scale-150" />
          </div>
        </div>
      </div>
      <div>
        <img src={adornoFooter} />
      </div>
    </div>
  );
};

export default Footer;
