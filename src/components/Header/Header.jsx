import classes from "./Header.module.css";
import facebookIcon from "../../assets/images/2021_Facebook_icon.svg.png";
import instagramIcon from "../../assets/images/Instagram-Icon.png";
import logoImg from "../../assets/images/noroot.png";

import { Link } from "react-scroll";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <a href="https://github.com/yadudka91/yadudka91.github.io.git">
          <img src={props.state.header.logo} alt="..." />
        </a>
      </div>
      <div className={classes.services}>
        <ul>
          <li>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              {props.state.header.services}
            </Link>
          </li>
          <li>
            <Link
              to="carousel"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              {props.state.header.photo}
            </Link>
          </li>
          <li>
            <a href="tel:+380991992162">{props.state.header.phone}</a>
          </li>
          <li>
            <a
              target="blank"
              href="https://www.facebook.com/cleararea.chernivtsi"
            >
              <img src={props.state.header.facebookIcon} alt="..." />
            </a>
            <a
              target="blank"
              href="https://www.instagram.com/clean_area_chernivtsi/?r=nametag"
            >
              <img src={props.state.header.instagramIcon} alt="..." />
            </a>
          </li>
        </ul>
      </div>

      <div
        className={classes.mobileBtn}
        onClick={() => {
          props.onMobileMenu(props.state.header);
        }}
      >
        <img
          src={
            props.state.showHeaderBurger
              ? props.state.otherImg.closeImg
              : props.state.otherImg.menu
          }
        />
      </div>

      <div
        className={
          props.state.showHeaderBurger
            ? classes.servicesBurger
            : classes.servicesDouble
        }
      >
        <ul>
          <div className={classes.logoBurger}>
            <a href="https://clean-area.com.ua/">
              <img src={props.state.headerBurger.logo} alt="..." />
            </a>
          </div>

          <li>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              {props.state.header.services}
            </Link>
          </li>
          <li>
            <Link
              to="carousel"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              {props.state.header.photo}
            </Link>
          </li>
          <li>
            <a href="tel:+380991992162">{props.state.headerBurger.phone}</a>
          </li>
          <li>
            <a
              target="blank"
              href="https://www.facebook.com/cleararea.chernivtsi"
            >
              <img src={props.state.headerBurger.facebookIcon} alt="..." />
            </a>
            <a
              target="blank"
              href="https://www.instagram.com/clean_area_chernivtsi/?r=nametag"
            >
              <img src={props.state.headerBurger.instagramIcon} alt="..." />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
