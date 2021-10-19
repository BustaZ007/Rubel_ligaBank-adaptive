import React from 'react';
import NumberFormat from 'react-number-format';


function CreditTime({creditTime, onChange, selected}) {
  const min = (selected === 0) ? 5 : 1;
  const max = (selected === 0) ? 30 : 5;
  return(
    <>
      <label className="calc__label" htmlFor="creditTime">Срок кредитования</label>
      <NumberFormat 
        className="calc__input" 
        suffix=" лет"
        value={creditTime}
        onValueChange={(value) => {
          let inputValue = value.floatValue;
          if(inputValue < min || !inputValue) {
            inputValue = min;
          } else if (inputValue > max) {
            inputValue = max;
          }
          onChange(inputValue);
        }}
      />
      <input className="calc__range" 
        type="range"
        min={min} 
        max={max} 
        step="1" 
        value={creditTime}
        onChange={(evt) => onChange(evt.target.valueAsNumber)}
      />
      <div className="calc__range-wrapper">
        <p className="calc__text">{min} лет</p>
        <p className="calc__text">{max} лет</p>
      </div>
    </>
  );
}

export default CreditTime;