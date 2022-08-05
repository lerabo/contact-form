import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  values: {
    name: "",
    email: "",
    text: "",
  },
  status: "idle",
};

export const submitContactForm = createAsyncThunk(
  "contactForm/submit",
  async (values) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/contact`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  }
);

export const contactFormSlice = createSlice({
  name: "contactForm",
  initialState,
  reducers: {
    updateValues: (state, action) => {
      state.values = {
        ...state.values,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.status = "loading";
      })
      .addCase(submitContactForm.fulfilled, (state) => {
        state.status = initialState.status;
        state.values = initialState.values;
      });
  },
});

export const { updateValues } = contactFormSlice.actions;

export const getFormStatus = (state) => state.contactForm.status;
export const getFormValues = (state) => state.contactForm.values;

export default contactFormSlice;
