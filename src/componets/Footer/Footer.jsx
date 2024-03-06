import React from "react";
import Container from "../Container";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <Container>
        <div className={css.wrapper}>
          <p className={css.tel}>718-669-1100</p>
          <p className={css.address}>94-38 59th Ave Elmhurst, NY 11373</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
