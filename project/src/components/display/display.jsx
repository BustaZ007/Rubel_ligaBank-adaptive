import React from 'react';
import NumberFormat from 'react-number-format';

function Display({counter, decrement, onChange, increment, selected}) {
  function Check() {
    if(selected === 0) {
      return(counter < 1200000 || counter > 25000000);
    } 
    return(counter < 500000 || counter > 5000000);
  }
  return(
    <>
    <label className="calc__label" htmlFor="sum">{`Стоимость ${(selected === 0) ? "недвижимости" : "автомобиля"}`}</label>
      <div className="calc__score">
        <button className="calc__minus" type="button" onClick={() => {
          if((selected === 0 && counter <= 100000) || (selected === 1 && counter <= 50000)) {
            return;
          }
          decrement((selected === 0) ? 100000 : 50000)}}
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
        <button className="calc__plus" type="button" onClick={()=> increment((selected === 0) ? 100000 : 50000)}></button>
      </div>
      <p className="calc__text">{(selected === 0) ? "От 1 200 000  до 25 000 000 рублей" : "От 500 000  до 5 000 000 рублей"}</p>
    </>
  ); 
}

export default Display;