// import backgroundMain from "../../assets/images/backgroundImg2.png";
import classes from "./Main.module.css";

const Main = (props) => {
  return (
    <div className={classes.main}>
      <img
        className={classes.backgroundImg}
        src={props.state.otherImg.backgroundMain}
        alt="..."
      />

      <div className={classes.cleanAreaTitle}>
        <span className={classes.cleanAreaTitleSpan}>Clean area</span>
      </div>
      <div className={classes.cleanAreaText}>
        <span className={classes.cleanAreaTextSpan}>
          Надаємо повний спектр клінінгових послуг <br />в місті Чернівці та
          Чернівецькій області
        </span>
      </div>
    </div>
  );
};

export default Main;
