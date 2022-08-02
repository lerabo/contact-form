import React, { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = (props) => {
  const [status, setStatus] = useState("Send message");
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);
  const [enteredMessage, setEnteredMessage] = useState("");
  const [enteredMessageIsValid, setEnteredMessageIsValid] = useState(true);

  const Message = {
    name: enteredName,
    email: enteredEmail,
    message: enteredMessage,
  };

  const clearForm = () => {
    setEnteredName("");
    setEnteredEmail("");
    setEnteredMessage("");
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    if (enteredEmail.trim() === "") {
      setEnteredEmailIsValid(false);
      return;
    }
    if (enteredMessage.trim() === "") {
      setEnteredMessageIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    setEnteredEmailIsValid(true);
    setEnteredMessageIsValid(true);
    console.log(Message);
    
//     setStatus("Sending...");
//     const { name, email, message } = event.target.elements;
//     let details = {
//       name: name.value,
//       email: email.value,
//       message: message.value,
//     };
//     let response = await fetch("http://localhost:3000/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json;charset=utf-8",
//       },
//       body: JSON.stringify(details),
//     });
//     setStatus("Send message");
//     let result = await response.json();
//     alert(result.status);

    clearForm();
  };

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const messageInputChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  const nameInputStyles = enteredNameIsValid
    ? `${styles["form-control"]}`
    : `${styles["form-control"]} ${styles["invalid"]}`;

  const emailInputStyles = enteredEmailIsValid
    ? `${styles["form-control"]}`
    : `${styles["form-control"]} ${styles["invalid"]}`;

  const messageInputStyles = enteredMessageIsValid
    ? `${styles["form-control"]}`
    : `${styles["form-control"]} ${styles["invalid"]}`;

  return (
    <form className={styles.app} onSubmit={submitHandler}>
      <div className={nameInputStyles}>
        <label htmlFor="name">Your name*:</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
        />
      </div>
      {!enteredNameIsValid && (
        <p className={styles["error-text"]}>Name is a required field.</p>
      )}
      <div className={emailInputStyles}>
        <label htmlFor="name">Your e-mail*:</label>
        <input
          type="text"
          id="email"
          value={enteredEmail}
          onChange={emailInputChangeHandler}
        />
      </div>
      {!enteredEmailIsValid && (
        <p className={styles["error-text"]}>Email is a required field.</p>
      )}
      <div className={messageInputStyles}>
        <label htmlFor="name">Your message*:</label>
        <input
          type="text"
          id="message"
          value={enteredMessage}
          onChange={messageInputChangeHandler}
        />
      </div>
      {!enteredMessageIsValid && (
        <p className={styles["error-text"]}>Message is a required field.</p>
      )}
      <div className={styles["form-actions"]}>
        <button type="submit">{status}</button>
      </div>
    </form>
  );
};

export default ContactForm;
