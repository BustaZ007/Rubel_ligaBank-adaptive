import FocusTrap from 'focus-trap-react';
import React, { useEffect, useState } from 'react';
import Password from '../password/password';

function Sigin({active, setActive}) {

  const [iconShow, setIconShow] = useState(false);
  const [login,setLogin] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisiblity = () => {
    setIconShow(iconShow ? false : true);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = active ? 'hidden' : 'auto';

    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setActive(false)
     }
   };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [active]);

  function Clean() {
    setActive(false);
    setLogin("");
    setPassword("");
  }

  function addToHistory() {
    if(login.length > 0 && password.length > 0) {
      const history = localStorage.getItem('history');
      let result = [];
      if(history) {
        result = [...JSON.parse(history)];
      }
      result.push({
        login: login,
        password: password,
      });
      localStorage.setItem('history', JSON.stringify(result));
    }
  }

  return(
    <>
        {(active) ? <FocusTrap>
        <div className={(active) ? "sigin-active" : "sigin"} onClick={(evt) => {
          setActive(false);
          }}>
          <div className="sigin__wrapper" onClick={(evt) => {
            evt.stopPropagation()}}>
            <picture>
              <source media="(min-width: 768px)" srcSet="./image/logo-login.svg 1x" />
              <img className="sigin__logo" src="./image/logo-sigin.svg" alt="logo" />
            </picture>
            <button className="sigin__close" onClick={(evt) => setActive(false)}></button>
            <form className="sigin__form">
              <label htmlFor="login" className="sigin__label">Логин</label>
              <input id="login" className="sigin__input"
                onChange={(evt) => {
                    const target = evt.target.value;
                    setLogin(target);
                }}
              />
              <div className="sigin__password-wrapper">
                <Password iconShow={iconShow} setPassword={setPassword}/>
                <button className="sigin__hidden" onClick={togglePasswordVisiblity}></button>
              </div>
              <div className="sigin__submit-wrapper">
                <button className="sigin__submit"
                type="submit"
                onClick={(evt) => {
                  evt.preventDefault();
                  addToHistory();
                  Clean();
                  }}
                >Войти</button>
                <span className="sigin__forgot"><a href="#">Забыли пароль?</a></span>
              </div>

            </form>
          </div>
        </div>
        </FocusTrap> : null}
      </>
  );
}

export default Sigin;