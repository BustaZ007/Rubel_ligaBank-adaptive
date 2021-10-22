import React from "react";

function Password({iconShow}) {
  console.log(iconShow)
  return(
    <>
      <label htmlFor="password" className="sigin__label">Пароль</label>
      <input id="password" type={(iconShow) ? "text" : "password"} className="sigin__input" />
    </>
  );
}

export default Password;