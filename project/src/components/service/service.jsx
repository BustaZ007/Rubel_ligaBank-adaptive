import React from 'react';

function Service() {
  return(
    <>
       <div className="information__wrapper">
        <div className="information__case">
          <div className="imformation__centering">
            <h2 className="information__header">Лига Банк — это огромное количество онлайн-сервисов для вашего удобства</h2>
            <ul className="information__list">
              <li className="information__item">Мобильный банк,<br className="br-none"/> который всегда под рукой</li>
              <li className="information__item">Приложение Лига-проездной позволит вам оплачивать<br className="br-none"/> билеты по всему миру</li>
            </ul>
            <button tabIndex="3" className="information__button">Узнать подробнее</button>
          </div>
          <div className="information__img-wrapper">
            <picture>
              <source media="(min-width: 1366px)" srcSet="./image/phone-image.png 1x" />
              <source  media="(min-width: 768px)" srcSet="./image/phone-tablet.png 1x" />
              <img className="information__image" src="./image/phone-mobile.png" alt="phone" width="87" height="113" />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;