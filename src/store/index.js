import { configureStore } from "@reduxjs/toolkit";
import contactForm from "../components/ContactForm/contactFormSlice";

const store = configureStore({
  reducer: {
    contactForm: contactForm.reducer,
  },
});

export default store;
