import React, { useState } from 'react';
import CreditTime from '../credit-time/credit-time';
import Display from '../display/display';
import Dropdown from '../dropdown/dropdown';
import InitialPayment from '../initial-payment/initial-payment';
import Error from '../error/error';
import Success from '../success/success';

function Calc() {
  const [selected, setSelected] = useState(-1); // 0 это ипотечное кредитование 1 авто 
  const [counter, setCounter] = useState(1);
  const incrementCounter = (value) => setCounter(counter + value);
  let decrement = (value) => setCounter(counter - value);
  const [errorMessage, setErrorMessage] = useState(null);

  const [initialPayment, setInitialPayment] = useState(1);

  const [creditTime, setCreditTime] = useState(5);

  const [maternalCapital, setMaternalCapital] = useState(true);
  const [casko, setCasko] = useState(false);
  const [insurance, setInsurance] = useState(false);

  const [stepCount, setStepCount] = useState(1);

  const [applicationNumber, setApplicationNumber] = useState("");

  //localStorage

  const [fio, setFio] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  if(!localStorage.getItem("application-number")) {
    localStorage.setItem("application-number", "10");
  }

  function selectCreditType(type) {
    setSelected(type);
    setCounter((type === 0) ? 2000000 : 500000);
    setCreditTime((type === 0) ? 5 : 1);
    setInitialPayment((type === 0) ? 2000000 * 0.1 : 500000 * 0.2);
    setStepCount(2);
  }

  function getCreditSumm() {
    if(maternalCapital) {
      return(counter - initialPayment - 470000);
    } 
    return (counter - initialPayment);
  }

  function getPercent() {
    if(selected === 0) {
      return (initialPayment / counter < 0.15) ? 9.40 : 8.50;
    } 
    if((casko && !insurance) || (!casko && insurance)) {
      return 8.5;
    }
    if(casko && insurance) {
      return 3.5;
    }
    return (counter < 2000000) ? 16 : 15;
  }

  function getMontlyPayment() {
    return Math.round(getCreditSumm() * getPercent()/1200/(1- Math.pow(1+getPercent()/1200,-creditTime*12)));
  }

  function validateFields() {
    return(selected === 0 && counter > 1200000 && counter < 2500000) || (selected === 1 && counter > 500000 && counter < 500000);
  }

  function submitCredit() {
    if(!validateFields()) {
      return;
    }

    if(selected === 0) {
      if(getCreditSumm() < 500000) {
        setErrorMessage(<Error error={errorMessage} close={setErrorMessage} type={0} />);
      } else {
        setApplicationNumber(localStorage.getItem("application-number"));
        setStepCount(3);
        const number = localStorage.getItem("application-number");
        localStorage.setItem("application-number", Number(number) + 1);
      }
    } else {
      if(getCreditSumm() < 200000) {
        setErrorMessage(<Error error={errorMessage} close={setErrorMessage} type={1} />);
      } else {
        setApplicationNumber(localStorage.getItem("application-number"));
        setStepCount(3);
        localStorage.setItem("application-number", Number(number) + 1);
      }
    }
  }

  function addToHistory(evt) {
    evt.preventDefault();
    if(fio.length > 0 && phone.length > 0 && email.length > 0) {
      const result = [...JSON.parse(localStorage.getItem('history'))];
      result.push({
        fio: fio,
        phone: phone,
        email: email,
      });
      localStorage.setItem('history', JSON.stringify(result));
    } else {
      setFio(login.length === 0);
      setPhone(password.length === 0);
      setEmail(password.length === 0);
    }
  }

  function addMask(number) {
    let mask = String(number);
    let result = "";
    for(let i = mask.length - 3; i > 0; i-= 3) {
      result = " " + mask.substring(i) + result;
      mask = mask.substring(0,i);
    }
    return mask + result;
  }

  return(
    <>
    <section className="calc">
      <form>
        <div className="calc__case">
          <div className="calc__container">
            <h2 className="calc__header">Кредитный калькулятор</h2>
            <div className="calc__wrapper">
              <h3 className="calc__step">Шаг 1. Цель кредита</h3>
              <Dropdown selected={selected} setSelected={selectCreditType} />
              <div className={(stepCount === 1) ? "calc__step-hidden" : ""}>
                <h3 className="calc__step">Шаг 2. Введите параметры кредита</h3>
                <Display counter={counter} onChange={setCounter} decrement={decrement} selected={selected} increment={incrementCounter}/>

                <InitialPayment 
                  initialPayment={initialPayment} 
                  counter={counter} 
                  onChange={setInitialPayment} 
                  maternalCapital={maternalCapital}
                  selected={selected}
                />

                <CreditTime creditTime={creditTime} onChange={setCreditTime} selected={selected}/>

                <input 
                  className="calc__maternalCapital"
                  type="checkbox" 
                  id="maternalCapital" 
                  checked={maternalCapital}
                  onChange={evt => setMaternalCapital(evt.target.checked)}
                />
                <label className="calc__checkbox" htmlFor="maternalCapital">Использовать материнский капитал</label>

                <div className={(selected === 0) ? "calc__insurance" : ""}>
                  <input 
                    type="checkbox" 
                    id="casko" 
                    checked={casko}
                    onChange={evt => setCasko(evt.target.checked)}
                  />
                  <label className="calc__checkbox" htmlFor="casko">Оформить КАСКО в нашем банке</label>
                </div>
                <div className={(selected === 0) ? "calc__insurance" : ""}>
                  <input 
                    type="checkbox" 
                    id="insuranceCheckbox" 
                    checked={insurance}
                    onChange={evt => setInsurance(evt.target.checked)}
                  />
                  <label className="calc__checkbox" htmlFor="insuranceCheckbox">Оформить Страхование жизни в нашем банке</label>
                </div>
              </div>
            </div>
          </div>
          <div className={(stepCount === 1) ? "calc__step-hidden" : "calc__offer"}>
            <div className="calc__offer-wrapper">
              <h3 className="calc__step calc__step-header">Наше предложение</h3>
              <div className="calc__step-wrapper">
                <ul className="calc__list">
                  <li className="calc__item">
                    <h3 className="calc__step calc__steb-item">{addMask(getCreditSumm())} рублей </h3>
                    <p className="calc__text-item">Сумма ипотеки</p>
                  </li>
                  <li className="calc__item">
                    <h3 className="calc__step calc__steb-item">{getPercent()}%</h3>
                    <p className="calc__text-item">Процентная ставка</p>
                  </li>
                  <li className="calc__item">
                    <h3 className="calc__step calc__steb-item">{addMask(getMontlyPayment())} рублей</h3>
                    <p className="calc__text-item">Ежемесячный платеж</p>
                  </li>
                  <li className="calc__item">
                    <h3 className="calc__step calc__steb-item">{addMask(Math.trunc(getMontlyPayment() / 45 * 100))} рублей</h3>
                    <p className="calc__text-item">Необходимый доход</p>
                  </li>
                </ul>
              </div>
              <button className="calc__button" onClick={(evt) => {
                evt.preventDefault();
                submitCredit();
              }}>Оформить заявку</button>
            </div>
          </div>
        </div>
      </form>
      <div className={(stepCount === 1 || stepCount === 2) ? "calc__step-hidden" : "registration"}>
        <div className="registration__wrapper">
          <h3 className="registration__header">Шаг 3. Оформление заявки</h3>
          <ul className="registration__list">
            <li className="registration__item">
              <span className="registration__text">Номер заявки</span>
              <span className="registration__text-cell">№ 00{applicationNumber}</span>
            </li>
            <li className="registration__item">
              <span className="registration__text">Цель кредита</span>
              <span className="registration__text-cell">{(selected === 0) ? "Ипотека" : "Кредит"}</span>
            </li>
            <li className="registration__item">
              <span className="registration__text">Стоимость недвижимости</span>
              <span className="registration__text-cell">{addMask(counter)} рублей</span>
            </li>
            <li className="registration__item">
              <span className="registration__text">Первоначальный взнос</span>
              <span className="registration__text-cell">{addMask(initialPayment)} рублей</span>
            </li>
            <li className="registration__item">
              <span className="registration__text">Срок кредитования</span>
              <span className="registration__text-cell">{creditTime} лет</span>
            </li>
          </ul>
          <form>
            <label className="visually-hidden">ФИО</label>
            <input type="text" className="registration__name" placeholder="ФИО"
              required="required"
              onChange={(evt) => {
                    const target = evt.target.value;
                    setFio(target);
                }}
            />
            <div className="registration__case">
              <label className="visually-hidden">Телефон</label>
              <input type="text" className="registration__phohe" placeholder="Телефон"
                required="required"
                onChange={(evt) => {
                    const target = evt.target.value;
                    setPhone(target);
                }}
              />
              <label className="visually-hidden">Е-mail</label>
              <input type="text" className="registration__email" placeholder="E-mail"
                required="required"
                onChange={(evt) => {
                    const target = evt.target.value;
                    setEmail(target);
                }}
              />
            </div>
            <div className="registration__button-case">
              <button className="registration__button" type="submit" 
              onClick={evt => {
                if(fio.length > 0 && email.length > 0 && phone.length > 0) {
                  setErrorMessage(<Success error={errorMessage} close={setErrorMessage}/>);
                }
                }
              }>Отправить</button>
            </div>
          </form>
        </div>
      </div>
      {errorMessage}
    </section>
    </>
  );
}

export default Calc;