import { render, screen, fireEvent } from '@testing-library/react';
import { SelectComponent, SelectForm } from './App';

describe('Selection Filter', function () {
  let results, expected, select, data;
  describe('Select Component', function () {
    let selectHandler, list, idNameTestIdAttributes;
    beforeEach(() => {
      selectHandler = jest.fn();
      list = ['Characteristics', 'Cold-blooded', 'Warm-blooded'];
      idNameTestIdAttributes = 'classifications'
      render(<SelectComponent
        optionList={list}
        idNameTestIdAttributes={idNameTestIdAttributes}
        value={list[0]}
        handleChange={selectHandler}
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

  describe('SelectForm Component', function () {
    let animals, classification, button;
    beforeEach(() => {
      data = [
        { 'Bear': ['Vertebrate', 'Warm-blooded', 'Mammal'] },
        { 'Turtle': ['Vertebrate', 'Cold-blooded'] },
        { 'Whale': ['Vertebrate', 'Warm-blooded', 'Mammal'] },
        { 'Salmon': ['Vertebrate', 'Cold-blooded'] },
        { 'Ostrich': ['Vertebrate', 'Warm-blooded', 'Bird'] }
      ];
      render(
        <SelectForm
          data={data}
          classification={'classification'}
          animals={'animals'}
        />
      );
      animals = screen.getByTestId('animals');
      classification = screen.getByTestId('classification');
      button = screen.getByRole('button');
    });

    test('renders original animal content', function () {
      expected = ['Animals', 'Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'];
      results = [];
      Array.from(animals.children).forEach(option => results.push(option.value));
      expect(results).toEqual(expected);
    });

    test('renders original characteristics content', function() {
      expected = ['Classification', 'Vertebrate', 'Warm-blooded', 'Mammal', 'Cold-blooded', 'Bird'];
      results = [];
      Array.from(classification.children).forEach(option => results.push(option.value));
      expect(results).toEqual(expected);
    });

    test('selecting an animal changes the classification list', function () {
      fireEvent.change(animals, { target: { value: 'Bear' } });
      expected = ['Vertebrate', 'Warm-blooded', 'Mammal'];
      results = [];
      Array.from(classification.children).forEach(option => results.push(option.value));
      expect(results).toEqual(expected);
    });

    test('selecting a classification changes the animal list', function () {
      fireEvent.change(classification, { target: { value: 'Warm-blooded' } });
      expected = ['Bear', 'Whale', 'Ostrich'];
      results = [];
      Array.from(animals.children).forEach(option => results.push(option.value));
      expect(results).toEqual(expected);
    });

    test('clear button resets the application', function () {
      const allClassifications = ['Classification', 'Vertebrate', 'Warm-blooded', 'Mammal', 'Cold-blooded', 'Bird'];
      const allAnimals = ['Animals', 'Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'];
      fireEvent.change(animals, { target: { value: 'Ostrich' } });
      results = [];
      expected = ['Vertebrate', 'Warm-blooded', 'Bird'].concat(allClassifications, allAnimals);
      Array.from(classification.children).forEach(option => results.push(option.value));
      fireEvent.click(button);
      Array.from(classification.children).forEach(option => results.push(option.value));
      Array.from(animals.children).forEach(option => results.push(option.value));
      expect(results).toEqual(expected);
    });
  });
});
