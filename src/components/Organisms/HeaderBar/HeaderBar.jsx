import React from 'react';
import styles from './HeaderBar.module.scss';

const HeaderBar = ({ amount }) => {
  return (
    <header className={styles.root}>
      <p className={styles.title}>Wallets</p>
      <div>
        <p className={styles.balance}>$ {amount} MXN</p>
        <p className={styles.balanceInfo}>Total combinado en pesos</p>
      </div>
    </header>
  );
};

export default HeaderBar;
