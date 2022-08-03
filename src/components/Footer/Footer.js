import React from "react";
import { MDBIcon } from "mdbreact";
import styles from "./Footer.module.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.socials}>
        <li>
          <MDBIcon fab icon="instagram" className={styles.i} />
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
      </ul>
    </footer>
  );
};

export default Footer;
