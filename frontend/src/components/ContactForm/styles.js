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
  & label {
    font-size: 1.5em;
  }
`;

export const StyledDiv = styled.div`
  margin-bottom: 1rem;
  & input,
  & label {
    display: block;
  }
  & label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    text-align: left;
  }
  & input,
  & select {
    font: inherit;
    padding: 1.5rem;
    border-radius: 10px;
    border: 1px solid #ccc;
    width: 20rem;
    max-width: 100%;
  }
  & input:focus {
    outline: none;
    border-color: #f472b7;
    background-color: #ffcce6;
  }
`;

export const StyledButton = styled.button`
  font: inherit;
  background-color: #fad34f;
  color: white;
  border: 1px solid #fad34f;
  padding: 1rem 3rem;
  border-radius: 40px;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: #fad34f;
    border-color: #ffcce6;
  }
`;

export const Div = styled.div`
  text-align: center;
  max-width: 20rem;
`;
