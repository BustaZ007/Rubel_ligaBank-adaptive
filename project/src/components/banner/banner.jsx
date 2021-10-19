import React, { useState } from 'react';

function Banner() {

  const banner = [
    {
      id: 0,
      title: 'Кредиты на любой случай',
      img: '../../image/banner2.png',
    },
    {
      id: 1,
      title: 'Кредиты на любой случай',
      img: '../../image/banner2.png',
    },
    {
      id: 3,
      title: 'Кредиты на любой случай',
      img: '../../image/banner3.png',
    }
  ]

  const [nextSlide, setNextSlide] = useState(1);

  let interval = setInterval(() => {
    if(nextSlide === 3) {
      setNextSlide(nextSlide / 3);
    } else {
      setNextSlide(nextSlide + 1);
    }
    clearInterval(interval);
  }, 4000);
  
  return(
    <>
    <section className="banner">
      <div className="banner__wrapper">
        <div className="banner__case">
          <h2 className="banner__header">Лига Банк</h2>
          <p className="banner__text">Кредиты на любой случай</p>
          <button className="banner__button"><span className="banner__button-text">Рассчитать кредит</span></button>
        </div>

        <div className="dot">
          {banner.map((item, index) => (
          <div key={index} className={nextSlide === index + 1 ? "dot__item" : "dot__active"}></div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default Banner;