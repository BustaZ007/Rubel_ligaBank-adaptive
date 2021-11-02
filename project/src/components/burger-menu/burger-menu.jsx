import React, { useEffect } from "react";
import propTypes from 'prop-types';

function BurgerMenu({modalBurgerActive, setModalActive}) {
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = modalBurgerActive ? 'hidden' : 'auto';
  }, [modalBurgerActive]);
  return(
  <>
  <nav className={(modalBurgerActive) ? "header__nav-active" : "header__nav"}>
    <div className="header__nav-wrapper">
      <ul className="header__list">
        <li className="header__item"><a tabIndex="1" href="#">Услуги</a></li>
        <li className="header__item"><a tabIndex="1" href="#">Рассчитать кредит</a></li>
        <li className="header__item"><a tabIndex="1" href="#">Конвертер валют</a></li>
        <li className="header__item"><a tabIndex="1" href="#">Контакты</a></li>
        <li className="header__item header__none" onClick={() => setModalActive(true)}><span tabIndex="1" className="header__item-button">Войти в Интернет-банк</span></li>
      </ul>
    </div>
  </nav>
  </>
  );
}

BurgerMenu.propTypes = {
  modalBurgerActive: propTypes.bool,
  setModalActive: propTypes.func,
}

export default BurgerMenu;