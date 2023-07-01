import React, { useContext } from "react";
import { AuthContext } from "../store/AuthContext";

import "./switch.css";

const Switch = () => {
  const userFree = useContext(AuthContext);

  const submit = () => {
    userFree.activateHandler();
  };

  return (
    <form className="switc">
      <label className="toggle">
        <input className="toggle-input" type="checkbox" onClick={submit} />
        <span className="toggle-label" data-off="OFF" data-on="ON"></span>
        <span className="toggle-handle"></span>
      </label>
    </form>
  );
};

export default Switch;
