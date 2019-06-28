// Constants
import { GET_WALLETS, SET_COINS, SET_PRICES } from './constants';

export const getWallets = token => async dispatch => {
  const url = 'https://api.staging.coinbtr.com/api/v1/data/listbalances/';

  const options = {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    })
  };

  try {
    const { data } = await fetch(url, options).then(res => res.json());
    const { wallets } = data;
    const walletsLength = wallets.length;
    let coins = '';

    const newWallets = wallets.map((wallet, index) => {
      const coin = wallet.coin.toUpperCase();

      coins += coin;

      if (index < walletsLength - 1) {
        coins += ',';
      }

      return {
        name: wallet.coin_name,
        coin: coin,
        balance: wallet.balances.available
      };
    });

    dispatch({ type: GET_WALLETS, payload: newWallets });
    dispatch({ type: SET_COINS, payload: coins });
  } catch (err) {
    console.error(err);
  }
};

export const getWalletsPrice = coins => async dispatch => {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coins}&tsyms=MXN`;

  const key =
    '828c9a21253dbdb3d4446631617348f1c8f53b23fca8f7d03b692c78df4a0b4a';

  const options = {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: `Apikey ${key}`
    })
  };

  try {
    const { RAW } = await fetch(url, options).then(res => res.json());

    dispatch({ type: SET_PRICES, payload: RAW });
  } catch (err) {
    console.error(err);
  }
};
