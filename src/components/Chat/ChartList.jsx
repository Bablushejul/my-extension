import React from "react";

const ChartList = (props) => {
  return (
    <div>
      <ul>
        {props.message.map((prev) => (
          <li key={prev.id}>{prev.reward}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChartList;
