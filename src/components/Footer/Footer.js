import React from "react";
import {
  StyledFooter,
  IconList,
  SmileCircleLeftIcon,
  SmileCircleTopIcon,
  SmileCircleRightIcon,
} from "./styles";
import FacebookIcon from "../../assets/icons/Facebook";
import TwitterIcon from "../../assets/icons/Twitter";
import LinkedInIcon from "../../assets/icons/LinkedIn";
import PinterestIcon from "../../assets/icons/Pinterest";

const Footer = () => {
  return (
    <StyledFooter>
      <SmileCircleLeftIcon />
      <IconList>
        <li>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a href="https://facebook.com/" target="_blank" rel="noreferrer">
            <FacebookIcon />
          </a>
        </li>
        <li>
          <a href="https://pinterest.com/" target="_blank" rel="noreferrer">
            <PinterestIcon />
          </a>
        </li>
      </IconList>
      <SmileCircleTopIcon />
      <SmileCircleRightIcon />
    </StyledFooter>
  );
};

export default Footer;
