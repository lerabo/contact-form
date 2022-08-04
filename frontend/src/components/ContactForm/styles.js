import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  max-width: 45rem;
  padding: 1rem;
  border-radius: 12px;
  margin: auto;
  padding-top: 5rem;
  min-width: 15rem;
  flex: 1;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: left;
  margin-bottom: 1rem;
`;

export const FormInput = styled.input`
  margin-bottom: 1rem;
  display: block;
  font: inherit;
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  max-width: 100%;
  min-width: 40%;

  &:focus {
    outline: none;
    border-color: #17C431;
    background-color: #DCF5E0;
  }
`;

export const FormButton = styled.button`
  font: inherit;
  background-color: #fad34f;
  color: white;
  border: 1px solid #fad34f;
  padding: 1rem 3rem;
  margin-left:4rem;
  border-radius: 40px;
  cursor: pointer;
  text-align: center;
  max-width: 100%;
  &:hover,
  &:active {
    background-color: #F0B610;
    border-color: #F09110;
  }
`;

