import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import { MATERNAL_CAPITAL, DEFAUL_CREDIT, MINIMAL_SUMM,NULL,AN_INTIAL_FEE_AUTO,AN_INTIAL_FEE_MORTGAGE,
  ONE,PERCENT} from '../../const';
import propTypes from 'prop-types';

function useForceUpdate() {
  const [value, setValue] = useState(NULL);
  return () => setValue(value => value + ONE);
}


function InitialPayment({initialPayment, counter, onChange, maternalCapital, selected}) {
  const forceUpdate = useForceUpdate();

  function Check() {
    const minCredit = (selected === NULL) ? DEFAUL_CREDIT : MINIMAL_SUMM;
    if(maternalCapital) {
      return(counter - initialPayment - MATERNAL_CAPITAL < minCredit);
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
        const minPercent = (selected === NULL) ? AN_INTIAL_FEE_MORTGAGE : AN_INTIAL_FEE_AUTO;
        if(evt.floatValue < counter * minPercent && initialPayment === counter * minPercent) {
          forceUpdate();
        }
        onChange((evt.floatValue < counter * minPercent) ? counter * minPercent : evt.floatValue);
        }}
    />
    <input className="calc__range"
     type="range"
     id="rangeInitialPayment"
      min={(selected === NULL) ? "10" : "20"} 
      max="100" 
      value={initialPayment / counter * PERCENT} 
      step="5"
      onChange={(evt) => {
        onChange(counter / PERCENT * evt.target.valueAsNumber);
        }}
    />
    <p className="calc__text">{(selected === NULL) ? "10%" : "20%"}</p>
    </>
  );
}

InitialPayment.propTypes = {
  selected: propTypes.number,
  maternalCapital: propTypes.bool,
  onChange: propTypes.func,
  counter: propTypes.number,
  initialPayment: propTypes.number,
}

export default InitialPayment;