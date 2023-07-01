import React, { useState } from "react";
import ChartForm from "./ChartForm";
import ChartList from "./ChartList";
import classes from "./chart.module.css";

const Chart = (props) => {
  const [messsage, setMessage] = useState([]);

  const messageHandler = (ureward, uid) => {
    setMessage((prev) => {
      return [...prev, { reward: ureward, id: uid }];
    });
  };
  console.log(messsage);

  return (
    <div className={classes.Chart}>
      <h1>
        <p>how can i help you</p>
      </h1>
      <div className={classes.control}>
        <ChartList message={messsage} />
      </div>

      <div className={classes.actions}>
        <ChartForm messages={messageHandler} />
      </div>
    </div>
  );
};

export default Chart;
