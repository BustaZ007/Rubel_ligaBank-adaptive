import React from 'react';
import NumberFormat from 'react-number-format';
import { MORTGAGE_MIN, MORTGAGE_MAX, DEFAUL_CREDIT, AUTO_CREDIT_MAX, COUNTER_MORTAGE, COUNTER_AUTO, NULL,ONE} from '../../const';
import propTypes from 'prop-types';

function Display({counter, decrement, onChange, increment, selected}) {
  function Check() {
    if(selected === NULL) {
      return(counter < MORTGAGE_MIN || counter > MORTGAGE_MAX);
    } 
    return(counter < DEFAUL_CREDIT || counter > AUTO_CREDIT_MAX);
  }
  return(
    <>
    <label className="calc__label" htmlFor="sum">{`Стоимость ${(selected === NULL) ? "недвижимости" : "автомобиля"}`}</label>
      <div className="calc__score">
        <button className="calc__minus" type="button" onClick={() => {
          if((selected === NULL && counter <= COUNTER_MORTAGE) || (selected === ONE && counter <= COUNTER_AUTO)) {
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
          onChange={evt => {
            onChange(Number(evt.target.value.substr(0, evt.target.value.length - 7).split(" ").join("")))}}
        />
        <button className="calc__plus" type="button" onClick={()=> increment((selected === NULL) ? COUNTER_MORTAGE : COUNTER_AUTO)}></button>
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