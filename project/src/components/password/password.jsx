import React from "react";

function Password({iconShow, setPassword}) {
  console.log(iconShow)
  return(
    <>
      <label htmlFor="password" className="sigin__label">Пароль</label>
      <input id="password" type={(iconShow) ? "text" : "password"} className="sigin__input" 
        onChange={(evt) => {
            const target = evt.target.value;
            setPassword(target);
        }}
      />
    </>
  );
}

export default Password;