import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import Futer from "./components/Futer/Futer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Services from "./components/Services/Services";
import ShowFullServicesItem from "./components/ShowFullServicesItem/ShowFullServicesItem";
import AboutCompany from "./components/AboutCompany/AboutCompany";
import Work from "./components/Work/Work";
import OrderCleaning from "./components/OrderCleaning/OrderCleaning";
import CallButton from "./components/CallButton/CallButton";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header
        state={props.state}
        onMobileMenu={props.onMobileMenu}
        onMobileMenu2={props.onMobileMenu2}
      />
      <Main state={props.state} />
      <AboutCompany />
      <Services state={props.state} onShowItem={props.onShowItem} />
      {props.state.showFullItem && (
        <ShowFullServicesItem
          state={props.state}
          onShowItem={props.onShowItem}
        />
      )}
      <Carousel
        state={props.state}
        sliderRight={props.sliderRight}
        sliderLeft={props.sliderLeft}
        setCurrentIndex={props.setCurrentIndex}
      />
      <Work state={props.state} />
      <OrderCleaning
        sendMessageTelegram={props.sendMessageTelegram}
        state={props.state}
      />
      <CallButton state={props.state} />

      <Futer state={props.state} />
    </div>
  );
}

export default App;
