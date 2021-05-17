import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import {
  loadCart, deletProductCart
} from '../../redux/actions/cartActions';
import QuantityHandler from '../QuantityHandler/QuantityHandler';
import CartStyles from './CartSummaryStyles';

function CartSummary({ cart, actions }) {
  useEffect(() => {
    actions.loadCart();
  }, []);

  return (
    <View style={CartStyles.productsContainer}>
      <View style={CartStyles.header}>
        <Text
          key="title"
          style={CartStyles.title}
          testID="title"
        >
          Resumen de tu cesta
        </Text>
        <Text
          style={CartStyles.items}
          testID="itemCount"
        >
          {`${cart.totalProducts()} productos`}
        </Text>
      </View>
      <ScrollView key="groupsContainer" style={CartStyles.groupsContainer}>
        {cart && cart.cartProducts.map((cartProduct) => (
          <View
            style={[CartStyles.containerRow, CartStyles.prodcutContainer]}
            key={cartProduct.id}
            testID="cartProductItem"
          >
            <Image
              key="productImage"
              style={CartStyles.productImage}
              source={{ uri: `${cartProduct.image}` }}
              testID={`productImage-${cartProduct.id}`}
            />
            <View>
              <View style={[CartStyles.containerRow, { justifyContent: 'space-between' }]}>
                <Text style={CartStyles.productName} testID={`productName-${cartProduct.id}`}>{cartProduct.name}</Text>
                <TouchableOpacity
                  key="removeProductCart"
                  onPress={() => {
                    actions.deletProductCart(cartProduct.id);
                  }}
                  testID={`removeProductCart-${cartProduct.id}`}
                >
                  <Text style={CartStyles.textDeleteProduct}>✕</Text>
                </TouchableOpacity>
              </View>
              <Text style={CartStyles.productBotanicName} testID={`productBotanicName-${cartProduct.id}`}>{cartProduct.botanicName}</Text>
              <Text style={CartStyles.productUnitPrice} testID={`productPriceUnit-${cartProduct.id}`}>
                {`${cartProduct.price} €/unidad`}
              </Text>
              <View style={[CartStyles.containerRow, CartStyles.productPrice]}>
                <Text style={CartStyles.totalProductPrice} testID={`productPrice-${cartProduct.id}`}>{`${cartProduct.totalPrice()} €`}</Text>
                <QuantityHandler productId={cartProduct.id} quantity={cartProduct.quantity} />
              </View>
            </View>
          </View>
        ))}

      </ScrollView>
    </View>
  );
}

CartSummary.propTypes = {
  actions: PropTypes.shape({
    loadCart: PropTypes.func,
    deletProductCart: PropTypes.func
  }).isRequired,
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
    totalProducts: PropTypes.func
  }).isRequired
};

function mapStateToProps({ cart }) {
  return {
    cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ loadCart, deletProductCart }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
