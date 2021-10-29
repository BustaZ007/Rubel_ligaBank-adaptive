import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import { CREDIT_TIME_MIN, CREDIT_TIME_MAX, NULL, ONE} from '../../const';
import propTypes, { func } from 'prop-types';

function useForceUpdate() {
  const [value, setValue] = useState(NULL);
  return () => setValue(value => value + ONE);
}

function CreditTime({creditTime, onChange, selected}) {
  const forceUpdate = useForceUpdate();
  const min = (selected === NULL) ? CREDIT_TIME_MIN : 1;
  const max = (selected === NULL) ? CREDIT_TIME_MAX : CREDIT_TIME_MIN;

  function declOfNum(n, text_forms) {  
    n = Math.abs(n) % 100; 
    let n1 = n % 10;
    if (n > 10 && n < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 == 1) { return text_forms[0]; }
    return text_forms[2];
  }
  const year = ['год', 'года', 'лет'];
  return(
    <>
      <label className="calc__label" htmlFor="creditTime">Срок кредитования</label>
      <NumberFormat 
        className="calc__input" 
        suffix={` ${declOfNum(creditTime, year)}`}
        value={creditTime}
        onValueChange={(value) => {
          let inputValue = value.floatValue;
          if(inputValue < min || !inputValue) {
            inputValue = min;
          } else if (inputValue > max) {
            inputValue = max;
          }
          onChange(inputValue);
          forceUpdate();
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
        <p className="calc__text">{min} {declOfNum(min,year)}</p>
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