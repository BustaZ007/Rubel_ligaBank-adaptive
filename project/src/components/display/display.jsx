import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import { MORTGAGE_MIN, MORTGAGE_MAX, DEFAUL_CREDIT, AUTO_CREDIT_MAX, COUNTER_MORTAGE, COUNTER_AUTO, NULL,ONE} from '../../const';
import propTypes from 'prop-types';

function useForceUpdate() {
  const [value, setValue] = useState(NULL);
  return () => setValue(value => value + ONE);
}

function Display({counter, decrement, onChange, increment, selected}) {
  const forceUpdate = useForceUpdate();
  function Check() {
    if(selected === NULL) {
      return(counter < MORTGAGE_MIN || counter > MORTGAGE_MAX);
    } 
    return(counter < DEFAUL_CREDIT || counter > AUTO_CREDIT_MAX);
  }

  function restrictions(value) {
    if(selected === NULL) {
      if(value <= MORTGAGE_MIN) {
        onChange(MORTGAGE_MIN);
        forceUpdate();
        return;
      } else if(value >= MORTGAGE_MAX) {
        onChange(MORTGAGE_MAX);
        forceUpdate();
        return;
      }
    } else { 
      if(value <= DEFAUL_CREDIT) {
        onChange(DEFAUL_CREDIT);
        forceUpdate();
        return;
      } 
      else if(value >= AUTO_CREDIT_MAX) {
        onChange(AUTO_CREDIT_MAX);
        forceUpdate();
        return;
      }
    }
    onChange(value);
  }
  return(
    <>
    <label className="calc__label" htmlFor="sum">{`Стоимость ${(selected === NULL) ? "недвижимости" : "автомобиля"}`}</label>
      <div className="calc__score">
        <button className="calc__minus" type="button" onClick={() => {
          if((selected === NULL && counter <= MORTGAGE_MIN) || (selected === ONE && counter <= DEFAUL_CREDIT)) {
            return;
          }
          decrement((selected === NULL) ? COUNTER_MORTAGE : COUNTER_AUTO)}}
        ></button>
        <NumberFormat 
          className={`calc__input calc__input-score  ${(Check()) ? "calc__input-score-error" : ""}`}
          thousandSeparator=" " 
          suffix=" рублей"
          id="sum"
          value={counter}
          onValueChange={evt => {
            restrictions(evt.floatValue)}}
        />
        <button className="calc__plus" type="button" onClick={()=> {
          if((selected === NULL && counter >= MORTGAGE_MAX) || (selected === ONE && counter >= AUTO_CREDIT_MAX)) {
            return;
          }
          increment((selected === NULL) ? COUNTER_MORTAGE : COUNTER_AUTO)}}
          ></button>
      </div>
      <p className="calc__text">{(selected === NULL) ? "От 1 200 000  до 25 000 000 рублей" : "От 500 000  до 5 000 000 рублей"}</p>
    </>
  ); 
}

Display.propTypes = {
  counter: propTypes.number,
  decrement: propTypes.func,
  onChange: propTypes.func,
  increment: propTypes.func,
  selected: propTypes.number,
}

export default Display;