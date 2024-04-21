import classes from "./OrderCleaning.module.css";
import React from "react";

const OrderCleaning = (props) => {
  return (
    <div className={classes.orderCleaning} id="orderCleaning">
      <p className={classes.orderCleaningTitle}>Залишити заявку</p>
      <div>
        <form
          className={classes.orderCleaningForm}
          onSubmit={(event) => props.sendMessageTelegram(event)}
        >
          <input
            autoComplete="off"
            type="text"
            name="name"
            maxlength="10"
            placeholder="Ім'я"
            required
          />
          <input
            autoComplete="off"
            type="tel"
            name="phone"
            maxlength="13"
            placeholder="+380"
            required
          />
          <input
            autoComplete="off"
            type="numeric"
            name="number"
            maxlength="3"
            placeholder="Площа"
            required
          />
          <select name="select">
            <option value="Виберіть">Виберіть</option>
            <option value="Генеральне прибирання">Генеральне прибирання</option>
            <option value="Прибирання після ремонту">
              Прибирання після ремонту
            </option>
            <option value="Підтримуюче прибирання">
              Підтримуюче прибирання
            </option>
            <option value="Миття вікон">Миття вікон</option>
            <option value="Хімчистка диванів">Хімчистка диванів</option>
            <option value="Хімчистка матраців">Хімчистка матраців</option>
            <option value="Хімчистки крісел та стільців">
              Хімчистки крісел та стільців
            </option>
            <option value="Хімчистки килимів">Хімчистки килимів</option>
          </select>
          <input
            className={classes.inputSubmit}
            name="send"
            type="submit"
            value={props.state.workItem.send}
          ></input>
          <div className={classes.formSendResult}>
            {props.state.workItem.ok
              ? props.state.workItem.ok
              : props.state.workItem.error}
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderCleaning;
