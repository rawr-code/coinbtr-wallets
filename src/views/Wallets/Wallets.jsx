import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Actions
import { getWallets, getWalletsPrice } from '../../store/wallets/actions';

// Atoms
import { MainContainer } from '../../components/Atoms';

// Organisms
import { HeaderBar, Wallet } from '../../components/Organisms';

import img from '../../images/logo.svg';

const Wallets = ({ state, actions }) => {
  const { token, coins, prices } = state;
  let { wallets } = state;

  let amount = 0;

  wallets = wallets.map(wallet => {
    const { balance, coin } = wallet;
    const baseUrl = 'https://www.cryptocompare.com';
    const walletData = prices[coin] ? prices[coin].MXN : null;
    const wImage = walletData ? `${baseUrl}${walletData.IMAGEURL}` : img;

    if (walletData) {
      amount += balance * walletData.PRICE;
    }

    const newWallet = {
      ...wallet,
      imageUrl: wImage
    };

    return newWallet;
  });

  useEffect(() => {
    actions.getWallets(token);
  }, []);

  useEffect(() => {
    if (coins) {
      actions.getWalletsPrice(coins);
    }
  }, [coins]);

  return (
    <MainContainer>
      <HeaderBar amount={amount} />
      {wallets.map(wallet => {
        const { coin, name, balance, imageUrl } = wallet;
        const price = prices[coin] ? prices[coin].MXN.PRICE : 0;

        return (
          <Wallet
            key={coin}
            img={imageUrl}
            name={name}
            tag={coin}
            balance={balance}
            price={price}
          />
        );
      })}
    </MainContainer>
  );
};

const mapStateToProps = ({ auth, wallets }) => ({
  state: {
    token: auth.userToken,
    wallets: wallets.wallets,
    coins: wallets.coins,
    prices: wallets.prices
  }
});

const mapdispatchToProps = dispatch => ({
  actions: {
    getWallets: token => dispatch(getWallets(token)),
    getWalletsPrice: coins => dispatch(getWalletsPrice(coins))
  }
});

export default connect(
  mapStateToProps,
  mapdispatchToProps
)(Wallets);
