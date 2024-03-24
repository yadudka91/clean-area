import classes from "./Futer.module.css";

const Futer = (props) => {
  return (
    <div className={classes.futerDiv}>
      <div className={classes.futerText}>
        <p>+38 (099) 199-21-62</p>
        <p>м. Чернівці</p>
        <p className={classes.futerLicence}> © 2024 Усі права захищені</p>
      </div>
      <div className={classes.futerText}>
        <p>Працюємо без вихідних</p>
        <p>з 09.00 по 18.00</p>
      </div>
      <div className={classes.futerTextImg}>
        <p className={classes.futureImg}>
          <a
            target="blank"
            href="https://www.facebook.com/cleararea.chernivtsi"
          >
            <img src={props.state.otherImg.facebookIcon} alt="..." />
          </a>
        </p>
        <p className={classes.futureImg}>
          <a
            target="blank"
            href="https://www.instagram.com/clean_area_chernivtsi/?r=nametag"
          >
            <img src={props.state.otherImg.instagramIcon} alt="..." />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Futer;
