import React, { useState } from 'react';
import NumberFormat from 'react-number-format';

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return () => setValue(value => value + 1);
}


function InitialPayment({initialPayment, counter, onChange, maternalCapital, selected}) {
  const forceUpdate = useForceUpdate();

  function Check() {
    const minCredit = (selected === 0) ? 500000 : 200000;
    if(maternalCapital) {
      return(counter - initialPayment - 470000 < minCredit);
    } else {
      return(counter - initialPayment < minCredit);
    }
  }
  return(
    <>
    <label className="calc__label" htmlFor="contribution" >Первоначальный взнос</label>
    <NumberFormat 
      className={`calc__input ${(Check()) ? "calc__input-score-error" : ""}`} 
      thousandSeparator=" " 
      suffix=" рублей"
      value={initialPayment}
      type="text" 
      id="contribution"
      onValueChange={evt => {
        const minPercent = (selected === 0) ? 0.1 : 0.2;
        if(evt.floatValue < counter * minPercent && initialPayment === counter * minPercent) {
          forceUpdate();
        }
        onChange((evt.floatValue < counter * minPercent) ? counter * minPercent : evt.floatValue);
        }}
    />
    <input className="calc__range"
     type="range"
     id="rangeInitialPayment"
      min={(selected === 0) ? "10" : "20"} 
      max="100" 
      value={initialPayment / counter * 100} 
      step="5"
      onChange={(evt) => {
        onChange(counter / 100 * evt.target.valueAsNumber);
        }}
    />
    <p className="calc__text">{(selected === 0) ? "10%" : "20%"}</p>
    </>
  );
}

export default InitialPayment;