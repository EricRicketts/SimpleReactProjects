import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { classificationsAndAnimals } from "./javascript/data";
import App from './App';

describe('Test Selection Filter', function () {
  let expected, results, classifications, animals, classificationsOptionsValues, animalsOptionsValues;
  beforeEach(() => {
    render(<App dataSet={classificationsAndAnimals}/>)
    classifications = screen.getByTestId('classifications');
    animals = screen.getByTestId('animals');
  });

  test('initialization', function () {
    expected = [
      ['Classification', 'Bird', 'Cold-blooded', 'Mammal', 'Vertebrate', 'Warm-blooded'],
      ['Animals', 'Bear', 'Ostrich', 'Salmon', 'Turtle', 'Whale']
    ];
    classificationsOptionsValues = Array.from(classifications).map(option => option.value);
    animalsOptionsValues = Array.from(animals).map(option => option.value);
    results = [classificationsOptionsValues, animalsOptionsValues];
    expect(results).toEqual(expected)
  });

  test('select Mammal', function () {
    expected = ['Bear', 'Whale'];
    userEvent.selectOptions(classifications, ['Mammal']);
    animalsOptionsValues = Array.from(animals).map(option => option.value);
    expect(animalsOptionsValues).toEqual(expected);
  });

  test('select Cold-blooded', function () {
    expected = ['Salmon', 'Turtle'];
    userEvent.selectOptions(classifications, ['Cold-blooded']);
    animalsOptionsValues = Array.from(animals).map(option => option.value);
    expect(animalsOptionsValues).toEqual(expected);
  });

  test('select Bear', function () {
    expected = ['Mammal', 'Vertebrate', 'Warm-blooded'];
    userEvent.selectOptions(animals, ['Bear']);
    classificationsOptionsValues = Array.from(classifications).map(option => option.value);
    expect(classificationsOptionsValues).toEqual(expected);
  });

  test('select Salmon', function () {
    expected = ['Cold-blooded', 'Vertebrate'];
    userEvent.selectOptions(animals, ['Salmon']);
    classificationsOptionsValues = Array.from(classifications).map(option => option.value);
    expect(classificationsOptionsValues).toEqual(expected);
  });

  test('clear both lists', function () {
    expected = [
      ['Classification', 'Bird', 'Cold-blooded', 'Mammal', 'Vertebrate', 'Warm-blooded'],
      ['Animals', 'Bear', 'Ostrich', 'Salmon', 'Turtle', 'Whale']
    ];
    userEvent.selectOptions(animals, ['Ostrich']);
    let selectionFilter = screen.getByTestId('selectionFilter');
    fireEvent.submit(selectionFilter);
    classificationsOptionsValues = Array.from(classifications).map(option => option.value);
    animalsOptionsValues = Array.from(animals).map(option => option.value);
    results = [classificationsOptionsValues, animalsOptionsValues];
    expect(results).toEqual(expected)
  });
});