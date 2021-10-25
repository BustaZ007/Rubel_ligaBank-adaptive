import React, { useEffect } from "react";
import propTypes from 'prop-types';

function Success({close, error}) {
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = error ? 'hidden' : 'auto';

    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        close(null)
     }
   };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [error]);

  return(
    <>
    <div className="success success-active" onClick={() => close(null)}>
      <div className="success__wrapper">
        <button className="success__button" onClick={() => close(null)}></button>
        <h2 className="success__header">Спасибо за обращение в наш банк.</h2>
        <p className="success__text">Наш менеджер скоро свяжется с вами по указанному номеру телефона</p>
      </div>
    </div>
    </>
  );
}

Success.propTypes = {
  close: propTypes.func,
  error: propTypes.number,
}

export default Success;