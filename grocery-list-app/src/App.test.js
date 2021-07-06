import { render, screen, fireEvent } from '@testing-library/react';
import App, {
  GroceryList,
  GroceryListEntryForm
} from './App';

describe('Test Grocery List Application', function () {
  let results, expected, form, itemDescription, itemQuantity, groceryList;
  describe('Grocery List Component', function () {
    test('should produce an unordered list', function () {
      const list = [
        { quantity: "1", description: "Peanut Butter" },
        { quantity: "2", description: "Strawberry Jelly" },
        { quantity: "1", description: "Loaf Of Bread" }
      ];
      render(<GroceryList list={list} />);
      const unorderedList = screen.getByTestId('groceryList');
      expected = [3, true, '1 Peanut Butter', '2 Strawberry Jelly', '1 Loaf Of Bread'];
      results = [unorderedList.childElementCount];
      const listItems = unorderedList.children;
      const allAreListItems = Array.from(listItems).every(listItem => listItem.constructor.name === 'HTMLLIElement');
      results.push(allAreListItems)
      Array.from(listItems).forEach(listItem => results.push(listItem.textContent));
      expect(results).toEqual(expected);
    });
  });

  describe('Grocery List Entry From Component', function () {
    let submitHandler;
    beforeEach(() => {
      submitHandler = jest.fn();
      render(<GroceryListEntryForm onSubmitHanlder={submitHandler} />);
      form = screen.getByTestId('groceryListEntryForm');
      itemDescription = screen.getByTestId('description');
      itemQuantity = screen.getByTestId('quantity');
      itemDescription.value = 'Foo';
      itemQuantity.value = '1';
    });

    test('submit handler called on submission', function () {
      fireEvent.submit(form);
      expect(submitHandler).toHaveBeenCalledTimes(1);
    });

    test('the form clears itself upon submission', function () {
      expected = ['Foo', '1', '', ''];
      results = [itemDescription.value, itemQuantity.value];
      fireEvent.submit(form);
      results.push(itemDescription.value, itemQuantity.value);
      expect(results).toEqual(expected);
    });
  });

  describe('Top Level App Component', function () {
    beforeEach(() => {
      render(<App />);
      form = screen.getByTestId('groceryListEntryForm');
      itemDescription = screen.getByTestId('description');
      itemQuantity = screen.getByTestId('quantity');
      groceryList = screen.getByTestId('groceryList');
    });

    test('add items to grocery list', function () {
      expected = [0, 2, '1 Loaf of Bread', '2 Jars of Peanut Butter'];
      results = [groceryList.childElementCount];
      [itemDescription.value, itemQuantity.value] = ['Loaf of Bread', '1'];
      fireEvent.submit(form);
      [itemDescription.value, itemQuantity.value] = ['Jars of Peanut Butter', '2'];
      fireEvent.submit(form);
      results.push(groceryList.childElementCount);
      const liElements = Array.from(groceryList.children);
      results.push(liElements[0].textContent, liElements[1].textContent);
      expect(results).toEqual(expected);
    });
  });
});
