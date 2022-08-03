import React, { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = (props) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

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
      [event.target.id]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(values);

    clearForm();
  };

  return (
    <form className={styles.app} onSubmit={submitHandler}>
      <label>Reach out to us!</label>
      <div className={styles["form-control"]}>
        <input
          type="text"
          id="name"
          value={values.name}
          onChange={inputChangeHandler}
          placeholder="Your name*:"
          required
        />
      </div>
      <div className={styles["form-control"]}>
        <input
          type="text"
          id="email"
          value={values.email}
          onChange={inputChangeHandler}
          placeholder="Your e-mail*:"
          required
        />
      </div>
      <div className={styles["form-control"]}>
        <input
          type="text"
          id="message"
          value={values.message}
          onChange={inputChangeHandler}
          placeholder="Your message*:"
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
