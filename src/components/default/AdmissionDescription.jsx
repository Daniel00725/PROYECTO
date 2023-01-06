import React from "react";

const AdmissionDescription = () => {
  return (
    <div className="bg-color-lead-section  border-[1px] border-white">
      <h2>Inicio</h2>
      <div className="border-[1px] border-slate-500 bg-white ">
        <h2 className="mx-4 md:text-[17px] text-[12px] font-semibold pt-2">
          Sistema de Administración Escolar
        </h2>
        <div className="flex md:mx-4 mx-2 pt-10  ">
          <div className="">
            <p className="md:text-[17px] text-[12px] font-sans_rif opacity-100">
              Es la herramienta informática diseñada para apoyar en la consulta
              y realización de trámites escolares.
            </p>
            <div className="underline flex justify-end pr-3"> más </div>
          </div>
          <div>
            <img
              className="w-28 md:h-28 h-20 object-cover"
              src="https://www.saes.cecyt4.ipn.mx/Images/alumnos.jpg"
            />
          </div>
        </div>

        <div className="flex flex-col items-center md:pt-24 pt-[10px] md:text-[15px] text-[10px] font-sans_rif font-semibold">
          <div className="bg-color-purple text-white  text-center md:w-[500px] sm-[200px] w-[150px]">
            <h2>Ingresa a realizar tu denuncia segura en:</h2>
          </div>
          <span className=" text-color-blue cursor-pointer underline  text-center">
            denunciasegura.ipn.mx
          </span>
          <div className="bg-color-purple text-white  text-center md:w-[500px] sm-[200px] w-[150px]">
            <h2>¿Necesitas orientación o levantar una queja? Ingresa a:</h2>
          </div>
          <h2 className="md:text-[9px] text-[4px] text-color-blue cursor-pointer underline">
            www.ipn.mx/defensoria/orientacion-queja/queja.html
          </h2>
          <h2 className="bg-color-purple text-white   text-center mx-2">
            Ahora que has concluido con tu inscripción, es importante que
            obtengas tú Número de Seguridad Social (NNS). En caso de que no
            cuentes con uno, ingresa en:
          </h2>
          <h2 className="md:text-[9px] text-[4px] text-color-blue cursor-pointer underline text-center ">
            https://serviciosdigitales.imss.gob.mx/gestionAsegurados-web-e;
            JSESSIONIDASEGEXTERNO=XoyX2Tm11CUxH6KfPQojwLkvjdY7k4EUjo8Rlm
          </h2>
          <div className="bg-color-purple text-white  text-center md:w-[600px] sm:w-[200px] w-[150px]">
            <h2 className="text-center md:text-[15px] text-[10px]  ">
              Una vez que ya lo tengas favor de registrarte en:
            </h2>
          </div>
          <span className="text-[9px] text-color-blue cursor-pointer underline text-center">
            https://www.sismi.dse.ipn.mx/portal/f?p=1000:101:10253682110776
          </span>
          <div className="bg-color-purple text-white  text-center md:w-[600px] sm:w-[200px] w-[150px]">
            <h2 className="text-center md:text-[15px] text-[10px]">
              Para mayor información puedes escribir a este correo electrónico:
            </h2>
          </div>
          <span className=" text-color-blue cursor-pointer underline">
            afiliacionimss@ipn.mx
          </span>
        </div>
      </div>
      <div className="border-[1px] border-slate-500 bg-white flex gap-2 mt-1">
        <h2 className="text-slate-600">© 2008 SAES</h2>
        <h2 className="text-color-red-link underline">IPN</h2>
        <h2 className="text-color-red-link underline">IPN-DAE</h2>
      </div>
    </div>
  );
};

export default AdmissionDescription;
