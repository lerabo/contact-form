import styled from "styled-components";

import SmileCircleTop from "../../assets/icons/SmileCircleTop";
import SmileCircleLeft from "../../assets/icons/SmileCircleLeft";
import SmileCircleRight from "../../assets/icons/SmileCircleRight";

export const SmileCircleTopIcon = styled(SmileCircleTop)`
  position: absolute;
  top: 0;
  right: 80px;
  width: 79px;
  height: 80px;

  @media screen and (min-width: 600px) {
    width: 79px;
    height: 97px;
    right: 120px;
  }
`;

export const SmileCircleLeftIcon = styled(SmileCircleLeft)`
  position: absolute;
  width: 200px;
  height: 150px;
  bottom: 0;
  left: -20px;

  @media screen and (min-width: 600px) {
    left: 0;
    width: 299px;
    height: 238px;
  }
`;

export const SmileCircleRightIcon = styled(SmileCircleRight)`
  position: absolute;
  width: 84px;
  height: 122px;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
`;

export const StyledFooter = styled.footer`
  display: flex;
  height: 200px;
  margin-top: auto;
  overflow: hidden;
  position: relative;
  background: #fafafa;
  border-top: 1px solid #d8d8d8;
`;

export const IconList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 24px;
  padding-left: 160px;

  @media screen and (min-width: 600px) {
    padding-left: 280px;
  }

  svg {
    fill: #696969;
    width: 18px;
    height: 18px;
  }
`;
