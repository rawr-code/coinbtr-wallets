// Constants
import { LOGIN } from './constants';

const INITIAL_STATE = {
  userToken: ''
};

export default function(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case LOGIN: {
      return { ...state, userToken: payload };
    }

    default: {
      return state;
    }
  }
}
