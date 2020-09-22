import React from "react";

const Hello = () => {
  //   return(
  // <h1> Hello reactjs</h1>

  return React.createElement(
    "div",
    { id: "hello", classname: "dummy" },
    React.createElement("h1", null, "Hello reactjs")
  );
};

export default Hello;
