import FocusTrap from 'focus-trap-react';
import React from 'react';

function Sigin({active, setActive}) {
  return(
      <div className={(active) ? "sigin-active" : "sigin"} onClick={(evt) => {
        console.log(evt.target);
        setActive(false);
        }}>
        <div className="sigin__wrapper" onClick={(evt) => {
          evt.stopPropagation()}}>
          <img src="./image/logo-sigin.svg" alt="logo" />
          <button className="sigin__close">lol</button>
          { (active) ? <FocusTrap>
          <form>
            <label htmlFor="login" className="sigin__label">Логин</label>
            <input id="login" className="sigin__input" />

            <label htmlFor="password" className="sigin__label">Пароль</label>
            <input id="password" className="sigin__input" />

            <button className="sigin__sublit">Войти</button>
            <span className="sigin__forgot">Забыли пароль?</span>
          </form>
          </FocusTrap> : null}
        </div>
      </div>
  );
}

export default Sigin;