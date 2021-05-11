import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import orderSummaryStyles from './OrderSummaryStyles';

function OrderSummary({ cart }) {
  return (
    <View
      key="orderSummary"
      style={orderSummaryStyles.orderContainer}
    >
      <Text style={orderSummaryStyles.title} testID="title">Resumen del pedido</Text>
      <View style={orderSummaryStyles.containerRow}>
        <Text>Total del producto (IVA incluido)</Text>
        <Text testID="productWithTaxes">{`${cart.totalProductsWithTaxes()} €`}</Text>
      </View>
      <View style={orderSummaryStyles.containerRow}>
        <Text>Total sin IVA</Text>
        <Text testID="totalPriceWithoutTaxes">{`${cart.totalPrice()} €`}</Text>
      </View>
      <View style={orderSummaryStyles.containerRow}>
        <Text>Total impuestos</Text>
        <Text testID="taxes">{`${cart.taxes()} €`}</Text>
      </View>
      <View style={[orderSummaryStyles.containerRow, orderSummaryStyles.totalPriceContainer]}>
        <Text style={orderSummaryStyles.totalPrice}>Total a pagar</Text>
        <Text style={orderSummaryStyles.totalPrice} testID="totalPrice">{`${cart.totalProductsWithTaxes()} €`}</Text>
      </View>
      <TouchableOpacity
        key="pay"
        style={orderSummaryStyles.pay}
      >
        <Text style={orderSummaryStyles.textPay}>Pagar</Text>
      </TouchableOpacity>
    </View>
  );
}

OrderSummary.propTypes = {
  cart: PropTypes.shape({
    cartProducts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        brand: PropTypes.string,
        imageURL: PropTypes.string,
        price: PropTypes.string,
        quantity: PropTypes.number,
        stock: PropTypes.number
      })
    ),
    totalProducts: PropTypes.func,
    totalPrice: PropTypes.func,
    taxes: PropTypes.func,
    totalProductsWithTaxes: PropTypes.func,
    totalPriceWithTransport: PropTypes.func
  }).isRequired
};

function mapStateToProps({ cart }) {
  return {
    cart
  };
}

export default connect(mapStateToProps)(OrderSummary);
