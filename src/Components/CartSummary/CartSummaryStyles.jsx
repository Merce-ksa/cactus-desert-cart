import { StyleSheet } from 'react-native';
import variables from '../../assets/styles/variables';

export default StyleSheet.create({
  productsContainer: {
    width: '100%',
    paddingLeft: 8,
    paddingRight: 8
  },
  containerRow: {
    flexDirection: 'row'
  },
  header: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: variables.colour.dark
  },
  title: {
    fontWeight: 'bold',
    fontSize: variables.fontSize.big
  },
  prodcutContainer: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: variables.colour.light,
    borderRadius: 8
  },
  productName: {
    fontWeight: 'bold',
    fontSize: variables.fontSize.big
  },
  productBotanicName: {
    fontSize: variables.fontSize.small,
    fontWeight: 'bold',
    color: variables.colour.grey
  },
  productUnitPrice: {
    fontSize: variables.fontSize.medium,
    color: variables.colour.dark
  },
  productImage: {
    width: 70,
    height: 70,
    marginLeft: 10,
    marginRight: 15
  },
  productPrice: {
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  totalProductPrice: {
    width: 120,
    fontSize: variables.fontSize.big,
    fontWeight: 'bold'
  },
  textDeleteProduct: {
    fontSize: variables.fontSize.big,
    fontWeight: 'bold',
    color: variables.colour.dark
  }
});
