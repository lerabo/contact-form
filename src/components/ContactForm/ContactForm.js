import { useDispatch, useSelector } from "react-redux";
import {
  getFormStatus,
  getFormValues,
  submitContactForm,
  updateValues,
} from "./contactFormSlice";
import { FormButton, FormInput, PageTitle } from "./styles";

const ContactForm = () => {
  const dispatch = useDispatch();

  const values = useSelector(getFormValues);
  const status = useSelector(getFormStatus);

  const inputChangeHandler = (event) => {
    dispatch(
      updateValues({
        [event.target.id]: event.target.value,
      })
    );
  };

  const submitHandler = (event) => {
    event.preventDefault();

    dispatch(submitContactForm(values));
  };

  return (
    <>
      <PageTitle>Reach out to us!</PageTitle>
      <form onSubmit={submitHandler}>
        <FormInput
          type="text"
          id="name"
          value={values.name}
          onChange={inputChangeHandler}
          placeholder="Your name*"
          required
        />
        <FormInput
          type="email"
          id="email"
          value={values.email}
          onChange={inputChangeHandler}
          placeholder="Your e-mail*"
          required
        />
        <FormInput
          type="text"
          id="text"
          as="textarea"
          value={values.text}
          onChange={inputChangeHandler}
          placeholder="Your message*"
          required
        />
        <FormButton type="submit" disabled={status !== "idle"}>
          Send message
        </FormButton>
      </form>
    </>
  );
};

export default ContactForm;
