import React from 'react';
import styles from './MainContainer.module.scss';

const MainContainer = ({ children }) => {
  return <main className={styles.root}>{children}</main>;
};

export default MainContainer;
