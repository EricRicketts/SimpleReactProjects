import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Test Grocery List', function () {
  let item, quantity, form;
  beforeEach(() => {
    render(<App />);
    item = screen.getByTestId('item');
    quantity = screen.getByTestId('quantity');
    form = screen.getByTestId('groceryForm');
  });

  test('add one item', function () {
    item.value = 'Item One';
    quantity.value = '1';
    fireEvent.submit(form);
    expect(screen.getByText('1 Item One')).toBeInTheDocument();
  });

  test('add two items', function () {
    item.value = 'Item One';
    quantity.value = '1';
    fireEvent.submit(form);
    item.value = 'Item Two';
    quantity.value = '2';
    fireEvent.submit(form);
    ['1 Item One', '2 Item Two'].forEach(text => {
      expect(screen.getByText(text)).toBeInTheDocument();
    })
  });
});
