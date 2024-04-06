import classes from "./AboutCompany.module.css";

const AboutCompany = () => {
  return (
    <div className={classes.aboutCompanyBlock}>
      <div className={classes.titleDiv}>
        <span className={classes.titleSpan}>Clean Area</span>
        <p>
          - це команда відповідальних фахівців, що володіють знаннями, сучасними
          засобами і технікою для 100% прибирання та завжди готові прийти на
          допомогу для наведення чистоти і порядку у Вашій оселі!
        </p>
      </div>
    </div>
  );
};

export default AboutCompany;
