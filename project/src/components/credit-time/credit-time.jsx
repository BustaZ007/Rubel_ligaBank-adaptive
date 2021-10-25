import React from 'react';
import NumberFormat from 'react-number-format';
import { CREDIT_TIME_MIN, CREDIT_TIME_MAX, NULL } from '../../const';
import propTypes, { func } from 'prop-types';

function CreditTime({creditTime, onChange, selected}) {
  const min = (selected === NULL) ? CREDIT_TIME_MIN : 1;
  const max = (selected === NULL) ? CREDIT_TIME_MAX : CREDIT_TIME_MIN;
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

CreditTime.propTypes = {
  onChange: propTypes.func,
  creditTime: propTypes.number,
  selected: propTypes.number,
}

export default CreditTime;