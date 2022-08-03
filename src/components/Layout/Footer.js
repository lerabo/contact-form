import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import footerImg from "../../assets/footer.png";
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <img src={footerImg} alt="Footer" className={styles.img}/>
      <MDBIcon fab icon="instagram" />
      <MDBIcon fab icon="twitter" />
      <MDBIcon fab icon="facebook-f" />
      <MDBIcon fab icon="pinterest-p" />
    </footer>
  );
};

export default Footer;
