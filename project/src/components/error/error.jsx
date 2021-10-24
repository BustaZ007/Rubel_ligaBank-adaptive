import React from "react";

function Error({type, close, error}) {
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
    <div className="error error-active" onClick={() => close(null)}>
      <div className="error__wrapper">
        <div className="error__case">
          <h2 className="error__header">{`Наш банк не выдаёт ${(type) ? "автомобильные" : "ипотечные"} кредиты меньше ${(type) ? "200000" : "500000"} рублей.`}</h2>
          <p className="error__text">Попробуйте использовать другие параметры для расчёта.</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Error;