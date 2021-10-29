import React, { useState } from "react";
import { NULL } from "../../const";
import propTypes from 'prop-types';

function Dropdown({selected, setSelected}) {
  const [isActive, setIsActive] = useState(false);
  const options = ['Ипотечное кредитование', 'Автомобильное кредитование']
  return(
    <>
      <div className="dropdown">
        <div className="dropdown-btn" 
          tabIndex="0"
          onClick={() => setIsActive(!isActive)}
          onKeyDown={(evt) => {
            if(evt.key === "Enter") {
              setIsActive(true)
            }
          }}
         >
          {(selected >= NULL) ? options[selected] : 'Выберите цель кредита'}
          <span className={(isActive) ? "dropdown__icon-active" : "dropdown__icon"}>
            <img src="./image/arrow.svg" alt="ползунок" width="16" height="8" />
          </span>
        </div>
        {isActive && (
          <div className="dropdown-content">
          {options.map((option, index) => (
            <div key={index} tabIndex="0" className="dropdown-item" 
              onClick={() => {
                setSelected(index);
                setIsActive(false);
              }}
              onKeyDown={(evt) => {
                if(evt.key === "Enter") {
                  setSelected(index);
                  setIsActive(false);
                }
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

Dropdown.propTypes = {
  selected: propTypes.number,
  setSelected: propTypes.func,
}

export default Dropdown;