import React, { useState } from 'react';
import CreditTime from '../credit-time/credit-time';
import Display from '../display/display';
import Dropdown from '../dropdown/dropdown';
import InitialPayment from '../initial-payment/initial-payment';
import Error from '../error/error';
import Success from '../success/success';
import { DEFAULT_MORTGAGE, DEFAUL_CREDIT, MATERNAL_CAPITAL, MORTGAGE_MIN, MORTGAGE_MAX, 
  AUTO_CREDIT_MAX, INITIAL_PAYMENT_PERCENT, INTEREST_RATE_MIN, INTEREST_RATE_MAX, CASKO_OR_LIFE_INCURANCE,
  CASKO_AND_LIFE_INCURANCE, INTEREST_RATE_MIN_AUTO, INTEREST_RATE_MAX_AUTO,
  MINIMAL_SUMM, CREDIT_TIME_MIN, NULL, AN_INTIAL_FEE_MORTGAGE, AN_INTIAL_FEE_AUTO, ONE, MONTHLY_PAYMENT,
  PERCENT} from '../../const';


function Calc() {
  const STEP_TWO = 2;
  const STEP_THREE = 3;

  const [selected, setSelected] = useState(-1); // 0 это ипотечное кредитование 1 авто 
  const [counter, setCounter] = useState(ONE);
  const incrementCounter = (value) => setCounter(counter + value);
  let decrement = (value) => setCounter(counter - value);
  const [errorMessage, setErrorMessage] = useState(null);

  const [initialPayment, setInitialPayment] = useState(ONE);

  const [creditTime, setCreditTime] = useState(CREDIT_TIME_MIN);

  const [maternalCapital, setMaternalCapital] = useState(true);
  const [casko, setCasko] = useState(false);
  const [insurance, setInsurance] = useState(false);

  const [stepCount, setStepCount] = useState(ONE);

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
    setCounter((type === NULL) ? DEFAULT_MORTGAGE : DEFAUL_CREDIT);
    setCreditTime((type === NULL) ? CREDIT_TIME_MIN : ONE);
    setInitialPayment((type === NULL) ? DEFAULT_MORTGAGE * AN_INTIAL_FEE_MORTGAGE : DEFAUL_CREDIT * AN_INTIAL_FEE_AUTO);
    setStepCount(STEP_TWO);
  }

  function getCreditSumm() {
    return (maternalCapital) ? counter - initialPayment - MATERNAL_CAPITAL: counter - initialPayment; 
  }

  function getPercent() {
    if(selected === NULL) {
      return (initialPayment / counter < INITIAL_PAYMENT_PERCENT) ? INTEREST_RATE_MAX : INTEREST_RATE_MIN;
    } 
    if((casko && !insurance) || (!casko && insurance)) {
      return CASKO_OR_LIFE_INCURANCE;
    }
    if(casko && insurance) {
      return CASKO_AND_LIFE_INCURANCE;
    }
    return (counter < DEFAULT_MORTGAGE) ? INTEREST_RATE_MAX_AUTO : INTEREST_RATE_MIN_AUTO;
  }

  function getMontlyPayment() {
    return Math.round(getCreditSumm() * getPercent()/1200/(ONE- Math.pow(1+getPercent()/1200,-creditTime*12)));
  }

  function validateFields() {
    return(selected === NULL && counter > MORTGAGE_MIN && counter < MORTGAGE_MAX) || (selected === ONE && counter > DEFAUL_CREDIT && counter < AUTO_CREDIT_MAX);
  }

  function submitCredit() {
    if(!validateFields()) {
      return;
    }

    if(selected === NULL) {
      if(getCreditSumm() < DEFAUL_CREDIT) {
        setErrorMessage(<Error error={errorMessage} close={setErrorMessage} type={NULL} />);
      } else {
        setApplicationNumber(localStorage.getItem("application-number"));
        setStepCount(STEP_THREE);
        const number = localStorage.getItem("application-number");
        localStorage.setItem("application-number", Number(number) + ONE);
      }
    } else {
      if(getCreditSumm() < MINIMAL_SUMM) {
        setErrorMessage(<Error error={errorMessage} close={setErrorMessage} type={ONE} />);
      } else {
        setApplicationNumber(localStorage.getItem("application-number"));
        setStepCount(STEP_THREE);
        localStorage.setItem("application-number", Number(number) + ONE);
      }
    }
  }

  function addToHistory() {
    if(fio.length > NULL && phone.length > NULL && email.length > NULL) {
      const history = localStorage.getItem('history');
      let result = [];
      if(history) {
        result = [...JSON.parse(history)];
      }
      result.push({
        fio: fio,
        phone: phone,
        email: email,
      });
      localStorage.setItem('history', JSON.stringify(result));
    }
  }

  function addMask(number, isFloat) {
    let formater = new Intl.NumberFormat('ru', {minimumFractionDigits: (isFloat)?2:0});
    return formater.format(number);
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
              <div className={(stepCount === ONE) ? "calc__step-hidden" : ""}>
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

                <div className={(selected === NULL) ? "calc__insurance" : ""}>
                  <input 
                    type="checkbox" 
                    id="casko" 
                    checked={casko}
                    onChange={evt => setCasko(evt.target.checked)}
                  />
                  <label className="calc__checkbox" htmlFor="casko">Оформить КАСКО в нашем банке</label>
                </div>
                <div className={(selected === NULL) ? "calc__insurance" : ""}>
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
          <div className={(stepCount === ONE) ? "calc__step-hidden" : "calc__offer"}>
            <div className="calc__offer-wrapper">
              <h3 className="calc__step calc__step-header">Наше предложение</h3>
              <div className="calc__step-wrapper">
                <ul className="calc__list">
                  <li className="calc__item">
                    <h3 className="calc__step calc__steb-item">{addMask(getCreditSumm(), false)} рублей </h3>
                    <p className="calc__text-item">Сумма ипотеки</p>
                  </li>
                  <li className="calc__item">
                    <h3 className="calc__step calc__steb-item">{addMask(getPercent(), true)}%</h3>
                    <p className="calc__text-item">Процентная ставка</p>
                  </li>
                  <li className="calc__item">
                    <h3 className="calc__step calc__steb-item">{addMask(getMontlyPayment(), false)} рублей</h3>
                    <p className="calc__text-item">Ежемесячный платеж</p>
                  </li>
                  <li className="calc__item">
                    <h3 className="calc__step calc__steb-item">{addMask(Math.trunc(getMontlyPayment() / MONTHLY_PAYMENT * PERCENT),false)} рублей</h3>
                    <p className="calc__text-item">Необходимый доход</p>
                  </li>
                </ul>
              </div>
              <button className="calc__button" type="submit" onClick={(evt) => {
                evt.preventDefault();
                submitCredit();
              }}>Оформить заявку</button>
            </div>
          </div>
        </div>
      </form>
      <div className={(stepCount === ONE || stepCount === STEP_TWO) ? "calc__step-hidden" : "registration"}>
        <div className="registration__wrapper">
          <h3 className="registration__header">Шаг 3. Оформление заявки</h3>
          <ul className="registration__list">
            <li className="registration__item">
              <span className="registration__text">Номер заявки</span>
              <span className="registration__text-cell">№ 00{applicationNumber}</span>
            </li>
            <li className="registration__item">
              <span className="registration__text">Цель кредита</span>
              <span className="registration__text-cell">{(selected === NULL) ? "Ипотека" : "Кредит"}</span>
            </li>
            <li className="registration__item">
              <span className="registration__text">Стоимость недвижимости</span>
              <span className="registration__text-cell">{addMask(counter, false)} рублей</span>
            </li>
            <li className="registration__item">
              <span className="registration__text">Первоначальный взнос</span>
              <span className="registration__text-cell">{addMask(initialPayment, false)} рублей</span>
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
                evt.preventDefault();
                if(fio.length > NULL && email.length > NULL && phone.length > NULL) {
                  setErrorMessage(<Success error={errorMessage} close={setErrorMessage}/>);
                }
                addToHistory();
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