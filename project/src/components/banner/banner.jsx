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
    <section className="slider">
      <div className={(nextSlide === 1) ? "banner" : "banner-hidden"}>
        <div className="banner__wrapper">
          <div className="banner__case">
            <h2 className="banner__header">Лига Банк</h2>
            <p className="banner__text">Кредиты на любой случай</p>
            <button className="banner__button"><span className="banner__button-text">Рассчитать кредит</span></button>
          </div>
        </div>
      </div>

      <div className={(nextSlide === 2) ? "banner-2" : "banner-hidden"}>
        <div className="banner__wrapper-2">
          <div className="banner__case">
            <h2 className="banner__header-2">Лига Банк</h2>
            <p className="banner__text-2">Ваша уверенность в завтрашнем дне</p>
          </div>
        </div>
      </div>

      <div className={(nextSlide === 3) ? "banner-3" : "banner-hidden"}>
        <div className="banner__wrapper-3">
          <div className="banner__case">
            <h2 className="banner__header-2">Лига Банк</h2>
            <p className="banner__text-2">Всегда рядом</p>
            <button className="banner__button-2"><span className="banner__button-text-2">Найти отделение</span></button>
          </div>
        </div>
      </div>

      <div className="dot">
          {banner.map((item, index) => (
            <div key={item.id} className={nextSlide === index + 1 ? "dot__item" : "dot__active"}></div>
          ))}
        </div>
    </section>
    </>
  );
}



export default Banner;