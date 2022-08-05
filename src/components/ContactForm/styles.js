import styled from "styled-components";

export const PageTitle = styled.h1`
  font-size: 40px;
  font-weight: 400;
  line-height: 52px;
  margin: 30px 0;
  text-align: center;

  @media screen and (min-width: 600px) {
    text-align: left;
  }
`;

export const FormInput = styled.input`
  margin-bottom: 8px;
  display: block;
  padding: 30px 46px;
  border-radius: 10px;
  border: 1px solid #dcdcdc;
  font-size: 18px;
  line-height: 32px;
  color: #2d2d2d;
  width: calc(100% - 46px * 2);
  max-width: 558px;

  &:focus {
    border-color: #2d2d2d;
  }
`;

export const FormButton = styled.button`
  margin-top: 16px;
  font-size: 18px;
  line-height: 18px;
  background-color: #fad34f;
  border-radius: 500px;
  color: #fff;
  cursor: pointer;
  border: none;
  padding: 28px 52px;
  width: 100%;

  @media screen and (min-width: 600px) {
    width: auto;
  }

  &:hover {
    opacity: 0.8;
  }

  &[disabled] {
    cursor: default;
    pointer-events: none;
    background-color: #ccc;
  }
`;
