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

  const minCredit = (selected === NULL) ? DEFAUL_CREDIT : MINIMAL_SUMM;
  function Check() {
    if(maternalCapital && selected === NULL) {
      return(counter - initialPayment - MATERNAL_CAPITAL < minCredit);
    } else {
      return(counter - initialPayment < minCredit);
    }
  }

  function getMaxPercent() {
    return (maternalCapital && selected === NULL)
    ? (counter - MATERNAL_CAPITAL - minCredit) / counter * PERCENT 
    : (counter - minCredit) / counter * PERCENT;
  }

  function update(value) {
    onChange(value);
    forceUpdate();
  }

  function restrictions(value) {
    const minPercent = (selected === NULL) ? AN_INTIAL_FEE_MORTGAGE : AN_INTIAL_FEE_AUTO;
    if(value < counter * minPercent) {
      return update(counter * minPercent);
    } 
    if(selected === NULL && maternalCapital && value > counter - MATERNAL_CAPITAL - minCredit) {
      return update(counter - MATERNAL_CAPITAL - minCredit);
    } 
    if(value > counter - minCredit) {
      return update(counter - minCredit);
    }
    onChange(value);
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
        restrictions(evt.floatValue);
      }}
    />
    <input className="calc__range"
     type="range"
     id="rangeInitialPayment"
      min={(selected === NULL) ? "10" : "20"} 
      max={Math.round(getMaxPercent())}
      value={initialPayment / counter * PERCENT} 
      step="5"
      onChange={(evt) => {
        onChange(counter / PERCENT * evt.target.valueAsNumber);
        }}
    />
    <p className="calc__text">{`${Math.round(initialPayment / counter * PERCENT)}%`}</p>
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