import React from "react";

function Success({close}) {
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

export default Success;