import React, { useState } from "react";
import { StyledForm, FormButton, FormInput, FormLabel } from "./styles";

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
    const response = await fetch(`${process.env.REACT_APP_API_URL}`, {
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
      <FormLabel>Reach out to us!</FormLabel>
      <div>
        <FormInput
          type="text"
          id="name"
          value={values.name}
          onChange={inputChangeHandler}
          placeholder="Your name*"
          required
        />
      </div>
      <div>
        <FormInput
          type="text"
          id="email"
          value={values.email}
          onChange={inputChangeHandler}
          placeholder="Your e-mail*"
          required
        />
      </div>
      <div>
        <FormInput
          type="text"
          id="message"
          value={values.message}
          onChange={inputChangeHandler}
          placeholder="Your message*"
          required
        />
      </div>
      <div>
        <FormButton type="submit">Send message</FormButton>
      </div>
    </StyledForm>
  );
};

export default ContactForm;
