import classes from "./Services.module.css";

const Services = (props) => {
  return (
    <div className={classes.services} id="services">
      {props.state.servicesCard.map((el) => (
        <div
          className={classes.servicesConteiner}
          onClick={() => {
            props.onShowItem(el);
          }}
        >
          <img className={classes.servicesImg} src={el.cardImg} alt="..." />
          <div className={classes.servicesText}>{el.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Services;
