import React from "react";
import { useNavigate } from "react-router-dom";
import { titleOption } from "./const";

const StudentOptions = () => {
  const navigate = useNavigate();
  return (
    <div>
      {titleOption?.map((item, index) => (
        <div key={index}>
          <h2 className="bg-color-lead-section2  border-[1px] border-white mx-1 pl-2 text-[12px] hover:text-color-red cursor-pointer hover:bg-color-yellow">
            {item.title}
          </h2>
          {item.section?.map((option, index) => (
            <div>
              <div
                type="button"
                onClick={() => {
                  if (option === "Calificaciones") {
                    navigate(`/default/${option}`);
                  }
                }}
                key={index}
                className="bg-color-lead-section2  border-[1px] border-white mx-1 pl-4 text-[12px] hover:text-color-red cursor-pointer hover:bg-color-yellow">
                {option}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default StudentOptions;
