import React, { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = (props) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const Message = {
    name: values.name,
    email: values.email,
    message: values.message,
  };

  const clearForm = () => {
    setValues({
      name: "",
      email: "",
      message: "",
    });
  };

  const inputChangeHandler = (event) => {
    setValues({ 
      ...values,
      [event.target.id] : event.target.value });
  };

  // const emailInputChangeHandler = (event) => {
  //   setValues({ email: event.target.value });
  // };

  // const messageInputChangeHandler = (event) => {
  //   setValues({ message: event.target.value });
  // };

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(Message);

    clearForm();
  };

  return (
    <form className={styles.app} onSubmit={submitHandler}>
      <div className={styles["form-control"]}>
        <label>Your name*:</label>
        <input
          type="text"
          id="name"
          onChange={inputChangeHandler}
          required
        />
      </div>
      <div className={styles["form-control"]}>
        <label>Your e-mail*:</label>
        <input
          type="text"
          id="email"
          onChange={inputChangeHandler}
          required
        />
      </div>
      <div className={styles["form-control"]}>
        <label>Your message*:</label>
        <input
          type="text"
          id="message"
          onChange={inputChangeHandler}
          required
        />
      </div>
      <div className={styles["form-actions"]}>
        <button type="submit">Send message</button>
      </div>
    </form>
  );
};

export default ContactForm;
