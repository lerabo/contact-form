import React from "react";
import { MDBIcon } from "mdbreact";
import { StyledFooter, StyledUl} from './styles'

const Footer = () => {
  return (
    <StyledFooter>
      <StyledUl>
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
      </StyledUl>
    </StyledFooter>
  );
};

export default Footer;
