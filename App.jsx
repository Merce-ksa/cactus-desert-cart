import React from 'react';
import {
  View,
  StatusBar
} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store/configureStore';
import CartCheckout from './src/Screens/CartCheckout/CartCheckout';
import Header from './src/Components/Header/Header';

export default function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <Header />
        <CartCheckout />
      </View>
    </Provider>
  );
}
