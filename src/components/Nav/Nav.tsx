import React from 'react';
import { Link } from 'react-router-dom';
import styles from './nav.module.css';
import { Button } from 'antd';

export const Nav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <h2 className={styles.title}>News Search Engine</h2>
      </Link>
      <Link to="/login">
        <Button type="text" className={styles.signInButton}>
          Sign In
        </Button>
      </Link>
    </nav>
  );
};
