import classes from "./CallButton.module.css";

const CallButton = (props) => {
  return (
    <div className={classes.callButtonDiv}>
      <a href="tel:+380991992162">
        <img src={props.state.otherImg.callButton} alt="..." />
      </a>
    </div>
  );
};

export default CallButton;
