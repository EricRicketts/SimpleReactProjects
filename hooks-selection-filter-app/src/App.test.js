import { render, screen, fireEvent } from '@testing-library/react';
import { classificationsAndAnimals } from "./javascript/data";
import App from './App';

describe('Test Selection Filter', function () {
  let expected, results, classifications, animals;
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
    const classificationsOptionsValues = Array.from(classifications).map(option => option.value);
    const animalsOptionsValues = Array.from(animals).map(option => option.value);
    results = [classificationsOptionsValues, animalsOptionsValues];
    expect(results).toEqual(expected)
  });
});