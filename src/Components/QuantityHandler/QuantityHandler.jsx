import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {
  increaseQuantity, decreaseQuantity
} from '../../redux/actions/cartActions';
import CartStyles from '../CartSummary/CartSummaryStyles';

function QuantityHandler({ productId, quantity, actions }) {
  return (
    <View style={CartStyles.containerRow}>
      <TouchableOpacity
        key="remove"
        style={[CartStyles.quantityButton, CartStyles.removeButton]}
        onPress={() => {
          actions.decreaseQuantity(productId);
        }}
        testID={`removeButton-${productId}`}
      >
        <Text style={CartStyles.textButton}>-</Text>
      </TouchableOpacity>
      <Text style={CartStyles.quantity} testID={`productQuantity-${productId}`}>{`${quantity}`}</Text>
      <TouchableOpacity
        key="add"
        style={[CartStyles.quantityButton, CartStyles.addButton]}
        onPress={() => {
          actions.increaseQuantity(productId);
        }}
        testID={`addButton-${productId}`}
      >
        <Text style={CartStyles.textButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

QuantityHandler.propTypes = {
  actions: PropTypes.shape({
    increaseQuantity: PropTypes.func,
    decreaseQuantity: PropTypes.func
  }).isRequired,
  productId: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      increaseQuantity, decreaseQuantity
    }, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(QuantityHandler);
