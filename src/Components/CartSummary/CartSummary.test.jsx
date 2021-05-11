import React from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import {
  render,
  waitFor,
  fireEvent,
  cleanup
} from '@testing-library/react-native';
import store from '../../redux/store/configureStore';
import '@testing-library/jest-native/extend-expect';
import CartSummary from './CartSummary';

jest.mock('axios');

describe('Given a CartSummary component', () => {
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

  afterEach(cleanup);

  describe('When is rendered', () => {
    test('Then title info is printed ', async () => {
      const { getByTestId } = render(
        <Provider store={store}><CartSummary /></Provider>
      );

      expect(getByTestId('title')).toHaveTextContent('Resumen de tu cesta');

      await waitFor(async () => {
        expect(getByTestId('itemCount')).toHaveTextContent('1 productos');
      });
    });

    test('Then two products are rendered', async () => {
      const { getAllByTestId } = render(
        <Provider store={store}><CartSummary /></Provider>
      );

      await waitFor(async () => {
        expect(getAllByTestId('cartProductItem').length).toBe(2);
      });
    });

    test('Then cartProducts should be rendered', async () => {
      const { getByTestId } = render(
        <Provider store={store}><CartSummary /></Provider>
      );

      await waitFor(async () => {
        expect(getByTestId('productName-4356931')).toHaveTextContent('Echinopsis Subdenudata');
        expect(getByTestId('productBotanicName-4356931')).toHaveTextContent('Echinopsis');
        expect(getByTestId('productPrice-4356931')).toHaveTextContent('2 €');
        expect(getByTestId('productQuantity-4356931')).toHaveTextContent('1');

        expect(getByTestId('productName-23456')).toHaveTextContent('Opuntia Ficus Indica');
        expect(getByTestId('productBotanicName-23456')).toHaveTextContent('Opuntia Ficus Indica');
        expect(getByTestId('productPrice-23456')).toHaveTextContent('6 €');
        expect(getByTestId('productQuantity-23456')).toHaveTextContent('2');
      });
    });

    test('Then quantity should increased when increase button is pressed', async () => {
      const { getByTestId } = render(
        <Provider store={store}><CartSummary /></Provider>
      );

      await waitFor(() => {
        expect(getByTestId('addButton-4356931')).not.toBeNull();
      });

      fireEvent.press(getByTestId('addButton-4356931'));

      await waitFor(async () => {
        expect(getByTestId('productPrice-4356931')).toHaveTextContent('4 €');
        expect(getByTestId('productQuantity-4356931')).toHaveTextContent('2');
      });
    });

    test('Then quantity should decreased when decrease button is pressed', async () => {
      const { getByTestId } = render(
        <Provider store={store}><CartSummary /></Provider>
      );

      await waitFor(async () => {
        expect(getByTestId('removeButton-23456')).not.toBeNull();

        fireEvent.press(getByTestId('removeButton-23456'));

        await waitFor(async () => {
          expect(getByTestId('productPrice-23456')).toHaveTextContent('3 €');
          expect(getByTestId('productQuantity-23456')).toHaveTextContent('1');
        });
      });
    });

    test('Then quantity should decreased when decrease button is pressed', async () => {
      const { getByTestId } = render(
        <Provider store={store}><CartSummary /></Provider>
      );

      await waitFor(async () => {
        expect(getByTestId('removeButton-23456')).not.toBeNull();

        fireEvent.press(getByTestId('removeButton-23456'));
        fireEvent.press(getByTestId('removeButton-23456'));
        fireEvent.press(getByTestId('removeButton-23456'));
        fireEvent.press(getByTestId('removeButton-23456'));
        fireEvent.press(getByTestId('removeButton-23456'));

        await waitFor(async () => {
          expect(getByTestId('productQuantity-23456')).toHaveTextContent('1');
        });
      });
    });

    test('Then producCart should be removed when remove button is pressed', async () => {
      const { getByTestId } = render(
        <Provider store={store}><CartSummary /></Provider>
      );

      await waitFor(async () => {
        expect(getByTestId('removeProductCart-4356931')).not.toBeNull();

        fireEvent.press(getByTestId('removeProductCart-4356931'));

        await waitFor(async () => {
          expect(getByTestId('itemCount')).toHaveTextContent('1');
        });
      });
    });
  });
});
