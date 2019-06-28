import React from 'react';
import styles from './Wallet.module.scss';

const Wallet = ({ img, name, tag, balance, price }) => {
  return (
    <div className={styles.root}>
      <div className={styles.textContainer}>
        <img src={img} alt="avatar" className={styles.avatar} />
        <p className={styles.name}>
          {name} <span className={styles.tag}>{tag}</span>
        </p>
      </div>
      <div>
        <p className={styles.balance}>{balance}</p>
        <p className={styles.price}>$ {price} MXN</p>
      </div>
    </div>
  );
};

export default Wallet;
