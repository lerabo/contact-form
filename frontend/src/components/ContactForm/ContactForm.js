import React, { useState } from "react";
import { StyledButton, StyledForm, StyledDiv, Div } from "./styles";

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

  const submitHandler = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:3001/contacts", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);

    clearForm();
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <label>Reach out to us!</label>
      <StyledDiv>
        <input
          type="text"
          id="name"
          value={values.name}
          onChange={inputChangeHandler}
          placeholder="Your name*:"
          required
        />
      </StyledDiv>
      <StyledDiv>
        <input
          type="text"
          id="email"
          value={values.email}
          onChange={inputChangeHandler}
          placeholder="Your e-mail*:"
          required
        />
      </StyledDiv>
      <StyledDiv>
        <input
          type="text"
          id="message"
          value={values.message}
          onChange={inputChangeHandler}
          placeholder="Your message*:"
          required
        />
      </StyledDiv>
      <Div>
        <StyledButton type="submit">Send message</StyledButton>
      </Div>
    </StyledForm>
  );
};

export default ContactForm;
