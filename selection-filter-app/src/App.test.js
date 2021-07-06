import { render, screen, fireEvent } from '@testing-library/react';
import App, { SelectComponent } from './App';

describe('Selection Filter', function () {
  let results, expected;
  describe('Select Component', function () {
    let select, selectHandler;
    beforeEach(() => {
      selectHandler = jest.fn();
      const list = ['Characteristics', 'Cold-blooded', 'Warm-blooded'];
      const idNameTestIdAttributes = 'classifications'
      render(<SelectComponent
        options={list}
        idNameTestIdAttributes={idNameTestIdAttributes}
        onHandleSelectChoice={selectHandler}
      />);
      select = screen.getByTestId('classifications');
    });

    test('renders given options', function () {
      expected = [3, true, 'Characteristics', 'Cold-blooded', 'Warm-blooded'];
      results = [select.childElementCount];
      const optionsArray = Array.from(select.children);
      let allOptionElements = optionsArray.every(el => el.constructor.name === 'HTMLOptionElement');
      results.push(allOptionElements);
      optionsArray.forEach(option => results.push(option.value));
      expect(results).toEqual(expected);
    });
  });
});
