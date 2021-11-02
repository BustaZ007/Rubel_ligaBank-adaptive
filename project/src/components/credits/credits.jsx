import React from 'react';

function Credits() {
  return(
    <>
       <div className="information__wrapper">
        <div className="information__case">
          <div className="imformation__centering">
            <h2 className="information__header">Лига Банк выдает кредиты под любые цели</h2>
            <ul className="information__list">
              <li className="information__item">Ипотечный кредит</li>
              <li className="information__item">Автокредит</li>
              <li className="information__item">Потребительский кредит</li>
            </ul>
            <p className="information__text">Рассчитайте ежемесячный платеж
            и ставку по кредиту воспользовавшись нашим <a className="informtion__link" href="#">кредитным калькулятором</a>
            </p>
          </div>
          <div className="information__img-wrapper information__img-wrapper-2">
            <picture>
              <source media="(min-width: 1024px)" srcSet="./image/car-money.png 1x" />
              <source  media="(min-width: 768px)" srcSet="./image/car-money-tablet.png 1x" />
              <img className="information__image" src="./image/car-money-mobile.png" alt="credit" width="87" height="133"/>
            </picture>
          </div>
        </div>
      </div>
    </>
  );
}

export default Credits;