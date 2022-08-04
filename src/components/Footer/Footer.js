import React from "react";
import { MDBIcon } from "mdbreact";
import { StyledFooter, IconList } from "./styles";

const Footer = () => {
  return (
    <StyledFooter>
      <IconList>
        <li>
          <MDBIcon fab icon="instagram" />
        </li>
        <li>
          <MDBIcon fab icon="twitter" />
        </li>
        <li>
          <MDBIcon fab icon="facebook-f" />
        </li>
        <li>
          <MDBIcon fab icon="pinterest-p" />
        </li>
      </IconList>
    </StyledFooter>
  );
};

export default Footer;
