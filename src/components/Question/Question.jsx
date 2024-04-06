import React from "react";
import classes from "./Question.module.css";

const Question = (props) => {
  return (
    <div className={classes.question}>
      <p className={classes.questionCleaningTitle}>Найчастіші питання:</p>
      <ul className={classes.questionItem}>
        {props.state.question.map((el, id) => (
          <li className={classes.accordionItem} key={id}>
            <button className={classes.accordionQ}>
              <a className={classes.closeImg}>
                <img
                  src={props.state.otherImg.closeImg2}
                  onClick={() => {
                    props.onAccordion(id);
                  }}
                />
              </a>
              {el.q}
            </button>
            <div
              className={
                id == props.state.accordion
                  ? classes.open
                  : classes.accordionCollapse
              }
            >
              <div className={classes.accordionA}>{el.a}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
