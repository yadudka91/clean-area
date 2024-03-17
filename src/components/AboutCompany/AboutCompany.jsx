import classes from "./AboutCompany.module.css";

const AboutCompany = () => {
  return (
    <div className={classes.aboutCompanyBlock}>
      <div className={classes.titleDiv}>
        <span className={classes.titleSpan}>Clean Area</span> - це професійна
        команда відповідальних фахівців, які володіють сучасними засобами і
        технікою та надають послуги фізичним та юридичним особам на території м.
        Чернівці та Чернівецької обл. Наші послуги:
      </div>
    </div>
  );
};

export default AboutCompany;
