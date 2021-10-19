import React, { useState } from "react";

function Dropdown({selected, setSelected}) {
  const [isActive, setIsActive] = useState(false);
  const options = ['Ипотечное кредитование', 'Автомобильное кредитование']
  return(
    <>
      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
          {(selected >= 0) ? options[selected] : 'Выберите цель кредита'}
          <span className={(isActive) ? "dropdown__icon-active" : "dropdown__icon"}>
            <img src="./image/arrow.svg"/>
          </span>
        </div>
        {isActive && (
          <div className="dropdown-content">
          {options.map((option, index) => (
            <div key={index} className="dropdown-item" 
              onClick={() => {
                setSelected(index);
                setIsActive(false);
              }}
            >
              <span className="dropdown__text">{option}</span>
            </div>
          ))}
        </div>
        )}
      </div>
    </>
  );
}

export default Dropdown;