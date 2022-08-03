import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import footerImg from "../../assets/footer.png";
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <React.Fragment>
      <img src={footerImg} alt="Footer" className={styles.img}/>
      <MDBIcon fab icon="instagram" />
      <MDBIcon fab icon="twitter" />
      <MDBIcon fab icon="facebook-f" />
      <MDBIcon fab icon="pinterest-p" />
    </React.Fragment>
  );
};

export default Footer;
