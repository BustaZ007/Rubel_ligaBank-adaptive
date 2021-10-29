import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const banner = [{id: 1},{id: 2},{id: 3}];
let interval;
function Banner() {
  const [nextSlide, setNextSlide] = useState(1);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      let slide = nextSlide + 1;
      if(nextSlide === 3) {
        slide = 1;
      }
      clearInterval(interval);
      interval = undefined;
      setNextSlide(slide);
    },
    onSwipedRight: () => {
      let slide = nextSlide - 1;
      if(nextSlide === 1) {
        slide = 3;
      }
      clearInterval(interval);
      interval = undefined;
      setNextSlide(slide);
    },
  })

  function changeSlide() {
    if(changeSlide.slide === 3) {
      changeSlide.slide = 1;
      setNextSlide(1);
    } else {
      changeSlide.slide += 1;
      setNextSlide(changeSlide.slide);
    }
  }
  
  function reloadInterval() {
    clearInterval(interval);
    changeSlide.slide = nextSlide;
    interval = setInterval(changeSlide, 4000);
  }

  useEffect(() => {
    if(!interval) {
      reloadInterval();
    }
  });
  
  return(
    <>
    <section className="slider" {...handlers}>
      <div className={(nextSlide === 1) ? "banner" : "banner-hidden"}>
        <div className="banner__wrapper">
          <div className="banner__case">
            <h2 className="banner__header">Лига Банк</h2>
            <p className="banner__text">Кредиты на любой случай</p>
            <button tabIndex="1" className="banner__button"><span className="banner__button-text">Рассчитать кредит</span></button>
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
            <button tabIndex="1" className="banner__button-2"><span className="banner__button-text-2">Найти отделение</span></button>
          </div>
        </div>
      </div>

      <div className="dot">
          {banner.map((item, index) => (
            <div 
              key={item.id} 
              tabIndex="1" 
              className={nextSlide === index + 1 ? "dot__item" : "dot__active"}
              onKeyDown={(evt) => {
                if(evt.key === "Enter") {
                  setNextSlide(index+1);
                  clearInterval(interval);
                  interval = undefined;
                }
              }}
              onClick={() => {
                setNextSlide(index + 1);
                clearInterval(interval);
                interval = undefined;
              }}
            ></div>
          ))}
        </div>
    </section>
    </>
  );
}



export default Banner;