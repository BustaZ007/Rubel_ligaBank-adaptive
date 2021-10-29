import React from 'react';

function Insurance() {
  return(
    <>
       <div className="information__wrapper">
        <div className="information__case">
          <div className="imformation__centering">
            <h2 className="information__header">Лига Страхование — застрахуем все что захотите</h2>
            <ul className="information__list">
              <li className="information__item">Автомобильное страхование</li>
              <li className="information__item">Страхование жизни и здоровья</li>
              <li className="information__item">Страхование недвижимости</li>
            </ul>
            <button tabIndex="2" className="information__button">Узнать подробнее</button>
          </div>
          <div className="information__img-wrapper information__img-wrapper-2 ">
            <picture>
              <source media="(min-width: 1366px)" srcSet="./image/block.png 1x" />
              <source  media="(min-width: 768px)" srcSet="./image/block-tablet.png 1x" />
              <img className="information__image" src="./image/block-mobile.png" alt="block" width="87" height="133" />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
}

export default Insurance;