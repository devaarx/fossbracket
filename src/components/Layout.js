import React from 'react';
import Navigation from './navigation';
import Footer from './footer';
import styles from '../styles/layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navigation />
      <div className={styles.layout_content}>{children}</div>
      <div className={styles.layout_footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
