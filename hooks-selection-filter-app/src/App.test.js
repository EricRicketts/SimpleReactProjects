import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('Test Selection Filter', function () {
  let expected, results, classificationSelect, animalSelect, classificationOptionsValues, animalOptionsValues;
  beforeEach(() => {
    render(<App />)
    classificationSelect = screen.getByTestId('classifications');
    animalSelect = screen.getByTestId('animals');
  });

  test('initialization', function () {
    expected = [
      ['Classification', 'Bird', 'Cold-blooded', 'Mammal', 'Vertebrate', 'Warm-blooded'],
      ['Animals', 'Bear', 'Ostrich', 'Salmon', 'Turtle', 'Whale'], 'Classification', 'Animals'
    ];
    classificationOptionsValues = Array.from(classificationSelect).map(option => option.value);
    animalOptionsValues = Array.from(animalSelect).map(option => option.value);
    results = [classificationOptionsValues, animalOptionsValues, classificationSelect.value, animalSelect.value];
    expect(results).toEqual(expected)
  });

  test('select Mammal', function () {
    expected = ['Bear', 'Whale', 'Mammal'];
    userEvent.selectOptions(classificationSelect, ['Mammal']);
    animalOptionsValues = Array.from(animalSelect).map(option => option.value);
    results = [...animalOptionsValues, classificationSelect.value];
    expect(results).toEqual(expected);
  });

  test('select Cold-blooded', function () {
    expected = ['Salmon', 'Turtle', 'Cold-blooded'];
    userEvent.selectOptions(classificationSelect, ['Cold-blooded']);
    animalOptionsValues = Array.from(animalSelect).map(option => option.value);
    results = [...animalOptionsValues, classificationSelect.value]
    expect(results).toEqual(expected);
  });

  test('select Bear', function () {
    expected = ['Mammal', 'Vertebrate', 'Warm-blooded', 'Bear'];
    userEvent.selectOptions(animalSelect, ['Bear']);
    classificationOptionsValues = Array.from(classificationSelect).map(option => option.value);
    results = [...classificationOptionsValues, animalSelect.value]
    expect(results).toEqual(expected);
  });

  test('select Salmon', function () {
    expected = ['Cold-blooded', 'Vertebrate', 'Salmon'];
    userEvent.selectOptions(animalSelect, ['Salmon']);
    classificationOptionsValues = Array.from(classificationSelect).map(option => option.value);
    results = [...classificationOptionsValues, animalSelect.value]
    expect(results).toEqual(expected);
  });

  test('clear both lists when first selecting an animal', function () {
    expected = [
      'Classification', 'Bird', 'Cold-blooded', 'Mammal', 'Vertebrate', 'Warm-blooded',
      'Animals', 'Bear', 'Ostrich', 'Salmon', 'Turtle', 'Whale', 'Classification', 'Animals'
    ];
    userEvent.selectOptions(animalSelect, ['Ostrich']);
    let selectionFilter = screen.getByTestId('selectionFilter');
    fireEvent.submit(selectionFilter);
    classificationOptionsValues = Array.from(classifications).map(option => option.value);
    animalOptionsValues = Array.from(animals).map(option => option.value);
    results = [...classificationOptionsValues, ...animalOptionsValues,
      classificationSelect.value, animalSelect.value];
    expect(results).toEqual(expected)
  });

  test('clear both lists when first selecting a classification', function () {
    expected = [
      'Classification', 'Bird', 'Cold-blooded', 'Mammal', 'Vertebrate', 'Warm-blooded',
      'Animals', 'Bear', 'Ostrich', 'Salmon', 'Turtle', 'Whale', 'Classification', 'Animals'
    ];
    userEvent.selectOptions(classificationSelect, ['Mammal']);
    let selectionFilter = screen.getByTestId('selectionFilter');
    fireEvent.submit(selectionFilter);
    classificationOptionsValues = Array.from(classificationSelect).map(option => option.value);
    animalOptionsValues = Array.from(animalSelect).map(option => option.value);
    results = [...classificationOptionsValues, ...animalOptionsValues,
      classificationSelect.value, animalSelect.value];
    expect(results).toEqual(expected)
  });
});