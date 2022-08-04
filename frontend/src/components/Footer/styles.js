import styled from "styled-components";
import img from '../../assets/footer.png'

export const StyledFooter = styled.footer`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: auto;
  max-width: 100%;
`;

export const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0 2rem 0;
  & li {
    margin: 0 10px;
  }
`;
