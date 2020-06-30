import React from "react";

import classes1 from "./Cockpit.module.css";

const cockpit = props => {
  let classes = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes1.Red;
  }
  if (props.persons.length <= 2) {
    classes.push("red");
  }
  if (props.persons.length <= 1) {
    classes.push("bold");
  }

  return (
    <div className={classes1.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.toggle}>
        Switch Name
      </button>
    </div>
  );
};

export default cockpit;
