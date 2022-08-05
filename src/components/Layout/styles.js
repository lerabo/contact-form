import styled from "styled-components";
import SmileCircleHeader from "../../assets/icons/SmileCircleHeader";
import backgroundSrc from "../../assets/background.png";

export const SmileCircleHeaderIcon = styled(SmileCircleHeader)`
  position: absolute;
  top: 24px;
  left: 30px;
  width: 122px;
  height: 122px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  background-image: url(${backgroundSrc});
  background-position: right center;
  background-repeat: no-repeat;
  background-size: contain;

  @media screen and (min-width: 900px) {
    background-position: right top;
  }
`;

export const Content = styled.div`
  padding: 140px 24px 20px;

  @media screen and (min-width: 600px) {
    padding: 180px 48px;
  }

  @media screen and (min-width: 900px) {
    padding: 180px 148px;
  }
`;
