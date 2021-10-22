import React, { useEffect } from "react";

function BurgerMenu({modalBurgerActive, setModalBurgerActive, setModalActive}) {
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = modalBurgerActive ? 'hidden' : 'auto';
  }, [modalBurgerActive]);
  return(
  <>
  <nav className={(modalBurgerActive) ? "header__nav-active" : "header__nav"}>
    <div className="header__nav-wrapper">
      <ul className="header__list">
        <li className="header__item">Услуги</li>
        <li className="header__item">Рассчитать кредит</li>
        <li className="header__item">Конвертер валют</li>
        <li className="header__item">Контакты</li>
        <li className="header__item" onClick={() => setModalActive(true)}><span className="header__item-button">Войти в Интернет-банк</span></li>
      </ul>
    </div>
  </nav>
  </>
  );
}

export default BurgerMenu;