import { StyleSheet } from 'react-native';
import variables from '../../assets/styles/variables';

export default StyleSheet.create({
  orderContainer: {
    width: '100%',
    padding: 20,
    position: 'relative',
    bottom: 0
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 2
  },
  title: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: variables.fontSize.big
  },
  totalPriceContainer: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1
  },
  totalPrice: {
    textAlign: 'center',
    fontSize: variables.fontSize.big,
    fontWeight: 'bold',
    color: variables.colour.primary
  },
  pay: {
    width: '100%',
    marginTop: 50,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: variables.colour.primary,
    borderRadius: 5
  },
  textPay: {
    textAlign: 'center',
    fontSize: variables.fontSize.medium,
    color: variables.colour.light
  }
});
