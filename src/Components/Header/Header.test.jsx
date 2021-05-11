import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react-native';
import store from '../../redux/store/configureStore';
import Header from './Header';

describe('Given a Header component', () => {
  describe('When is rendered', () => {
    test('Then logo and user is printed ', () => {
      const { getByTestId } = render(
        <Provider store={store}><Header /></Provider>
      );

      expect(getByTestId('logoDrinksAndCo')).toBeTruthy();
      expect(getByTestId('userIcon')).toBeTruthy();
    });
  });
});
