import classes from "./Main.module.css";
import { useState, useEffect } from "react";

const Main = (props) => {
  const [imageSrc, setImageSrc] = useState(
    props.state.otherImg.backgroundMain2
  );

  useEffect(() => {
    const img = new Image();
    img.src = props.state.otherImg.backgroundMain;
    img.onload = () => {
      setImageSrc(props.state.otherImg.backgroundMain);
    };
  }, [props.state.otherImg.backgroundMain]);
  return (
    <div className={classes.main}>
      <img className={classes.backgroundImg} src={imageSrc} alt="..." />

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
