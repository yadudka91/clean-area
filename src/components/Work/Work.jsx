import classes from "./Work.module.css";

const Work = (props) => {
  return (
    <div className={classes.workCard}>
      <div className={classes.workTitle}>Як ми працюємо:</div>
      <div className={classes.workDiv}>
        {props.state.work.map((el) => (
          <div>
            <img className={classes.workIcon} src={el.icon} alt="..." />
            <h3 className={classes.workH}>{el.title}</h3>
            <p className={classes.workText}>{el.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
