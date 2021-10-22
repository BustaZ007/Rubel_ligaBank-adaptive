import FocusTrap from 'focus-trap-react';
import React, { useEffect, useState } from 'react';
import Password from '../password/password';

function Sigin({active, setActive}) {

  const [iconShow, setIconShow] = useState(false);

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
              <input id="login" className="sigin__input" />
              <div className="sigin__password-wrapper">
                <Password iconShow={iconShow} />
                <button className="sigin__hidden" onClick={togglePasswordVisiblity}></button>
              </div>
              <div className="sigin__submit-wrapper">
                <button className="sigin__submit">Войти</button>
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