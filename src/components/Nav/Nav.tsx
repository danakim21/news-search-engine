import React from "react";
import { Link } from "react-router-dom";
import styles from "./nav.module.css";
import { Button } from "antd";

interface Props {
  showSignin: boolean;
}

export const Nav: React.FC<Props> = ({ showSignin }) => {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <h2 className={styles.title}>News Search Engine</h2>
      </Link>
      <Link to="/login">
        <Button
          type="text"
          className={showSignin ? styles.signInButton : styles.noSignInButton}
        >
          Sign In
        </Button>
      </Link>
    </nav>
  );
};
