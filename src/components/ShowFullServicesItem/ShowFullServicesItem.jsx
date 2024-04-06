import classes from "./ShowFullServicesItem.module.css";
import closeImg from "../../assets/images/close2.png";

const ShowFullServicesItem = (props) => {
  return (
    <div className={classes.servicesConteiner}>
      <div className={classes.servicesConteiner2}>
        <div className={classes.closeImg} onClick={() => props.onShowItem()}>
          <a>
            <img src={closeImg} />
          </a>
        </div>

        <div className={classes.servicesTitle}>
          {props.state.fullItem.title}:
        </div>

        <div className={classes.servicesPrice}>
          {props.state.fullItem.price}
        </div>

        <div className={classes.servicesDescriptionParagraph}>
          {props.state.fullItem.service.paragraph1}
        </div>
        <div className={classes.servicesDescription}>
          {props.state.fullItem.service.text1}
        </div>
        <div className={classes.servicesDescriptionParagraph}>
          {props.state.fullItem.service.paragraph2}
        </div>
        <div className={classes.servicesDescription}>
          {props.state.fullItem.service.text2}
        </div>
        <div className={classes.servicesDescriptionParagraph}>
          {props.state.fullItem.service.paragraph3}
        </div>
        <div className={classes.servicesDescription}>
          {props.state.fullItem.service.text3}
        </div>
      </div>
    </div>
  );
};

export default ShowFullServicesItem;
