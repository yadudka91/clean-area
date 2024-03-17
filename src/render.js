import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { onShowItem } from "./state";
import { sliderRight } from "./state";
import { sliderLeft } from "./state";
import { setCurrentIndex } from "./state";
import { sendMessageTelegram } from "./state";
import { onMobileMenu } from "./state";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        onShowItem={onShowItem}
        sliderRight={sliderRight}
        sliderLeft={sliderLeft}
        setCurrentIndex={setCurrentIndex}
        sendMessageTelegram={sendMessageTelegram}
        onMobileMenu={onMobileMenu}
      />
    </React.StrictMode>
  );
};

// reportWebVitals();
