import { StyleSheet } from 'react-native';
import variables from './variables';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: variables.colour.secondary
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  headerLogo: {
    width: 150,
    resizeMode: 'contain'
  },
  userIcon: {
    width: 30,
    height: 30
  }
});
