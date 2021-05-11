import React from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import { render, waitFor } from '@testing-library/react-native';
import store from '../../redux/store/configureStore';
import '@testing-library/jest-native/extend-expect';
import CartSummary from '../CartSummary/CartSummary';
import OrderSummary from './OrderSummary';

jest.mock('axios');

describe('Given a OrderSummary component', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: [{
        id: 4356931,
        attributes: {
          name: 'Echinopsis Subdenudata',
          botanic_name: 'Echinopsis',
          size: '30cm',
          image: 'https://echinopsis-ubdenudata.png'
        },
        original_unit_price: '2',
        quantity: 1,
        stock: 2
      },
      {
        id: 23456,
        attributes: {
          name: 'Opuntia Ficus Indica',
          botanic_name: 'Opuntia Ficus Indica',
          size: '20cm',
          image: 'https://opuntia-ficus-indica.png'
        },
        original_unit_price: '3',
        quantity: 2,
        stock: 5
      }]
    });
  });

  describe('When is rendered', () => {
    test('Then title info is printed ', async () => {
      const { getByTestId } = render(
        <Provider store={store}><OrderSummary /></Provider>
      );

      expect(getByTestId('title')).toHaveTextContent('Resumen del pedido');
    });

    test('Then Cart summary should be rendered', async () => {
      const { getByTestId } = render(
        <Provider store={store}>
          <CartSummary />
          <OrderSummary />
        </Provider>
      );

      await waitFor(async () => {
        expect(getByTestId('productWithTaxes')).toHaveTextContent('9.68 €');
        expect(getByTestId('totalPriceWithoutTaxes')).toHaveTextContent('8.00 €');
        expect(getByTestId('taxes')).toHaveTextContent('1.68 €');
        expect(getByTestId('totalPrice')).toHaveTextContent('9.68 €');
      });
    });
  });
});
