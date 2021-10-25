import React from "react";
import propTypes from 'prop-types';

function Password({iconShow, setPassword}) {
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

Password.propTypes = {
  iconShow: propTypes.bool,
  setPassword: propTypes.func,
}

export default Password;