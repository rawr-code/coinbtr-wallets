// Constants
import { LOGIN } from './constants';

// Login
export const signIn = data => async dispatch => {
  const url = 'https://api.staging.coinbtr.com/api/v1/login/';

  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  };

  try {
    const response = await fetch(url, options).then(res => res.json());
    const { token } = response.data;

    dispatch({ type: LOGIN, payload: token });
  } catch (err) {
    console.error(err);
  }
};
