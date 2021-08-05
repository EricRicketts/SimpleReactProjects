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
});
