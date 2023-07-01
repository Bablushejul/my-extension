import React, { useRef } from "react";
import classes from "../../components/Chat/chatform.module.css";

const ChartForm = (props) => {
  const messsageRef = useRef();
  const id = Math.random(Math.round() * 10000);
  const submitHandler = async (e) => {
    e.preventDefault();
    const messsages = messsageRef.current.value;
    console.log(messsages);
    props.messages(messsages, id);

    await fetch("https://jsonplacefolder.typicode.com/posts/extension.json", {
      method: "POST",
      body: JSON.stringify({ messsages }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await fetch("https://extension-7b275-default-rtdb.firebaseio.com/extension.json", {
      method: "POST",
      body: JSON.stringify({ messsages }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    messsageRef.current.value = "";
  };

  return (
    <div>
      <form className={classes.chartForm} onSubmit={submitHandler}>
        <input
          className={classes.input}
          type="text"
          ref={messsageRef}
          required
        />
        <button className={classes.btn}>Send</button>
      </form>
    </div>
  );
};

export default ChartForm;
