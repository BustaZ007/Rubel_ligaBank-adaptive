import React from 'react';

function Deposits() {
  return(
    <>
       <div className="information__wrapper">
        <div className="information__case">
          <div className="imformation__centering">
            <h2 className="information__header">Вклады Лига Банка – это выгодная инвестиция в свое будущее</h2>
            <ul className="information__list">
              <li className="information__item">Проценты по вкладам до 7%</li>
              <li className="information__item">Разнообразные условия</li>
              <li className="information__item">Возможность ежемесячной<br className="br-none" /> капитализации или вывод<br className="br-none"/> процентов на банковскую карту</li>
            </ul>
            <button className="information__button">Узнать подробнее</button>
          </div>
          <div className="information__img-wrapper">
            <picture>
              <source media="(min-width: 1366px)" srcSet="./image/piggybank.png 1x" />
              <source  media="(min-width: 768px)" srcSet="./image/piggybank-tablet.png 1x" />
              <img src="./image/piggybank-mobile.png" />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
}

export default Deposits;