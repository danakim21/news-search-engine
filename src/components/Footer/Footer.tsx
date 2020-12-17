import React from 'react';
import styles from './footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>News Search Engine</p>
      <p>Created by danakim21</p>
    </footer>
  );
};
