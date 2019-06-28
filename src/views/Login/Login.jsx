import React, { useState } from 'react';
import { connect } from 'react-redux';
import styles from './Login.module.scss';

// Actions
import { signIn } from '../../store/auth/actions';

const Login = ({ actions }) => {
  const [data, setData] = useState({ name: '', password: '' });
  const [disabled, setDisabled] = useState(true);

  const handleChange = e => {
    const { name, value } = e.target;
    let newData = data;
    newData[name] = value;

    setData(newData);

    if (data.email.length > 0 && data.password.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    actions.signIn(data);
  };

  return (
    <main className={styles.root}>
      <form onSubmit={handleSubmit} autoComplete="on" className={styles.form}>
        <p className={styles.label}>Usuario</p>
        <input
          type="email"
          name="email"
          className={styles.input}
          onChange={handleChange}
        />
        <p className={styles.label}>Contraseña</p>
        <input
          type="password"
          name="password"
          className={styles.input}
          onChange={handleChange}
        />
        <button type="submit" className={styles.button} disabled={disabled}>
          Login
        </button>
      </form>
    </main>
  );
};

const mapDispatchToProps = dispatch => ({
  actions: {
    signIn: payload => dispatch(signIn(payload))
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
