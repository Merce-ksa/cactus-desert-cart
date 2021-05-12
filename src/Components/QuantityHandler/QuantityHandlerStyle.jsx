import { StyleSheet } from 'react-native';
import variables from '../../assets/styles/variables';

export default StyleSheet.create({
  containerRow: {
    flexDirection: 'row'
  },
  quantityButton: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: variables.colour.primary
  },
  removeButton: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  addButton: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  },
  textButton: {
    fontSize: variables.fontSize.big,
    fontWeight: 'bold',
    color: variables.colour.light
  },
  quantity: {
    width: 50,
    textAlign: 'center',
    fontSize: variables.fontSize.medium
  }
});
