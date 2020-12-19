import React, { useState } from "react";
import { Nav } from "../../components/Nav/Nav";
import background from "../../assets/background.png";
import { message } from "antd";
import styles from "./signIn.module.css";

export const SignInPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [showEmailError, setShowEmailError] = useState<boolean>(false);
  const [showPasswordError, setShowPasswordError] = useState<boolean>(false);

  const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const onEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const onPasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const onLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let loginPass = true;

    if (!validateEmail(email) || email === "") {
      message.warning("Please enter a valid e-mail");
      loginPass = false;
    }

    if (password === "") {
      message.warning("Please enter your password");
      loginPass = false;
    }

    if (loginPass) {
      alert("true!");
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.leftContainer}>
        <img src={background} className={styles.backgroundImg} />
        <p className={styles.title}>News Search Engine</p>
      </div>
      <div className={styles.rightContainer}>
        <Nav showSignin={false} />
        <div className={styles.rightContainerContent}>
          <h2 className={styles.heading}>Welcome Back!</h2>
          <p className={styles.text}>Log in to continue</p>
          <form noValidate onSubmit={onLoginSubmit}>
            <div className={styles.labelInputContainer}>
              <label className={styles.label}>E-mail:</label>
              <input
                className={styles.input}
                type="email"
                value={email}
                onChange={onEmailChange}
              />
            </div>
            <div className={styles.labelInputContainer}>
              <label className={styles.label}>Password:</label>
              <input
                className={styles.input}
                type="password"
                value={password}
                onChange={onPasswordChange}
              />
            </div>
            <input className={styles.loginButton} type="submit" value="Login" />
          </form>
        </div>
        <form></form>
      </div>
    </div>
  );
};
