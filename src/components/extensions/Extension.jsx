import React from "react";
import classes from "./extension.module.css";

const Extension = () => {
  function test() {
    /* eslint-disable no-undef */

    chrome.tabs?.create({ url: "https://www.youtube.com/" });
  }

  return (
    <div className={classes.design}>
      <button onClick={test} className={classes.common}>
        You Tube
      </button>
    </div>
  );
};

export default Extension;
