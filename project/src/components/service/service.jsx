import React from 'react';

function Service() {
  return(
    <>
       <div className="information__wrapper">
        <div className="information__case">
          <div className="imformation__centering">
            <h2 className="information__header">Лига Банк — это огромное количество онлайн-сервисов для вашего удобства</h2>
            <ul className="information__list">
              <li className="information__item">Мобильный банк, который всегда под рукой</li>
              <li className="information__item">Приложение Лига-проездной позволит вам оплачивать билеты по всему миру</li>
            </ul>
            <button className="information__button">Узнать подробнее</button>
          </div>
          <div className="information__img-wrapper">
            <picture>
              <source media="(min-width: 1366px)" srcSet="./image/phone-image.png 1x" />
              <source  media="(min-width: 768px)" srcSet="./image/piggybank-tablet.png 1x" />
              <img src="./image/piggybank-mobile.png" />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;