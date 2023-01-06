import React from "react";
import cecytU from "../../assets/cecytU.png";
import logoU from "../../assets/logoU.png";
import { student } from "./const";

const Ratings = () => {
  return (
    <div className="border-[1px] border-slate-500 bg-white ">
      <div className="flex justify-between pt-4 mx-5">
        <img src={logoU} alt="" className="h-14" />
        <div className="text-center">
          <h1>CENTRO DE ESTUDIOS CIENTÍFICOS Y TECNOLÓGICOS No. 4</h1>
          <h1>LAZARO CARDENAS</h1>
        </div>
        <img src={cecytU} alt="" className="h-14" />
      </div>
      <div className="pt-4 ml-4">
        <div className="flex ">
          <h2 className="w-20">BOLETA:</h2>
          <h2> 2021040435</h2>
        </div>
        <div className="flex">
          <h2 className="w-20">NOMBRE:</h2>
          <h2>DANIEL LIRA FLORES 2</h2>
        </div>
        <table>
          <tr className="">
            <th className=" text-[12px] text-white bg-color-yellow  h-[18px] leading-none">
              Gpo
            </th>
            <th className="text-[12px] text-white bg-color-yellow  h-[18px] leading-none ">
              Materia........................................................................
            </th>
            <th className="text-[12px] text-white bg-color-yellow  h-[18px] leading-none">
              1er Parcial
            </th>
            <th className="text-[12px] text-white bg-color-yellow  h-[18px] leading-none">
              2o Parcial
            </th>
            <th className="text-[12px] text-white bg-color-yellow  h-[18px] leading-none">
              3er Parcial
            </th>
            <th className="text-[12px] text-white bg-color-yellow  h-[18px] leading-none">
              Ext
            </th>
            <th className="text-[12px] text-white bg-color-yellow  h-[18px] leading-none">
              Final.........
            </th>
          </tr>
          {student?.map((item, index) => (
            <tr
              className={`${index % 2 === 0 ? "" : "bg-color-lead-table"}`}
              key={index}>
              <td className="text-[10px]">{item.gpo}</td>
              <td className="text-[10px] pl-4 ">{item.materia}</td>
              <td className=" text-[10px]">{item.parcial1}</td>
              <td className="text-[10px] ">{item.parcial2}</td>
              <td className="text-[10px] ">{item.parcial3}</td>
              <td className="text-[10px] ">{item.ext}</td>
              <td className="text-[10px] ">{item.final}</td>
            </tr>
          ))}
        </table>
        <img
          className="mt-8 mb-8"
          src="data:image;base64,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ez1RpY9P0+Z79k8+RyAZD5MpLYALZcfzNYKeLdV0EX08mpwSIt9Paul3J50yJCFRPLiaaPcTyWKksSw4NevVUtdMs7K8vLq2h8ua8cSTkMcOwGM7c4BwBkgDOOa2oZjTjT5KlO//AAbd72XXrr6icOz/AK/qx5KvxI1+DV9TsbW0slWK8kET3kxXz8SYIVpp12kD+FQwBI+UCjTPiV4hez06GV9NupJYQ8skzx25kJlKtGGMqBXVQD8qsckfKOp9lpGAZSpzgjHBwfzrV5nhWrfV101vr+X9fdZOEru0jza31lbnwJqWn3viSSxuba7lhS+3PJMIUn2q52sH2/wF8jvk1yi61q2o3F3Y22q3kEXkLBDdW95OyS/6csfnRl3ZhlTj7x6HnHFezabommaRHGljZQw+XGYlcLl9pYsQXPzHLEnk9STV+iGaUqUpclO6bur2Vvlb9WuyHyNq1zzDSbzxBqHi8DUbvUNNe40WRvsoYYheORELhGBXJO8gkfdYVhrrdzDofh/UpNdurm/+xwD+yZJrlHvC0+CySJIod8HGCG6civa6KiOawTv7NW02str6bN639dNwdPTR/wBaf5HlvjHxRrc+orFpdhqtnJo8I1G7iEsPzLuHyybZCCpQSHaMknHGKi0bWk1PxQy6V4kuNSh1JLuffE8ySacBtKgxyM0e3naCYxyeDXq9FTHMqcaXs1Sto1v373Tbs9Vquzuh8rve/b8P6f8ASPGItcF1ovhq3Pia9h1ua2ild5dQEUMSCTLO+4jzXcfKEJbP+yOa9M/tzUf+hU1j/v7af/H626KyxOOhWtamur1fd+VtP63bFGDj17Hn9vPPJ4+updOi1eeDTrZWu7IX7PuuJjkLtkl8oBFycKcAnjOBWJ4t1C9t9U1W60e81G1GnWIkvFe/lkWOe4YKqlN7INiFm+XgHGOgr1uoby0t7+zmtLuJZbeZDHJG3RlPBFaUcyjCrGcoXSSW/pe/frbtffQfJ5nlOseONQ02y1bTPtFpdGyjP2cW0ryOyJLGg8yeO48xXw3IZFycjJ6Gn/wszxNdyacS+mWEMl3GlwT5ZeAb2VkkQzFwPu/MVjOeOMjPsdtbx2lrFbQ7vLiQIm5yxwBgZJJJ+pOalrWOZ4aMbOgm+7fl2tbz6k8krWueNyeP9e1TTpLpxb2slpJFMkVvcKkofzxG0MkQlZmBVurKmCOnQ17JVS/0yz1MW4vIfNW3mWeNSxCh16EgHDY64ORnB7VbrkxmJo11H2cOW1/0t+X4lRi07thRRRXAWFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/2Q=="
        />
      </div>
    </div>
  );
};

export default Ratings;