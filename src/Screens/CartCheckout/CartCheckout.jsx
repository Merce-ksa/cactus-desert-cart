import React from 'react';
import {
  View
} from 'react-native';
import CartSummary from '../../Components/CartSummary/CartSummary';
import OrderSummary from '../../Components/OrderSummary/OrderSummary';
import globals from '../../assets/styles/globals';

export default function CartCheckout() {
  return (
    <View style={globals.container}>
      <CartSummary />
      <OrderSummary />
    </View>
  );
}
