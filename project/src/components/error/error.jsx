import React from "react";

function Error({type}) {
  return(
    <>
    <div className="error error-active">
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