// Constants
import { GET_WALLETS, SET_COINS, SET_PRICES } from './constants';

const INITIAL_STATE = {
  wallets: [],
  coins: '',
  prices: {}
};

export default function(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case GET_WALLETS: {
      return { ...state, wallets: payload };
    }

    case SET_COINS: {
      return { ...state, coins: payload };
    }

    case SET_PRICES: {
      return { ...state, prices: payload };
    }

    default: {
      return state;
    }
  }
}
