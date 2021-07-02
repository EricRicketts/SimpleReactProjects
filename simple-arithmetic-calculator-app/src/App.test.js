import {render, screen, fireEvent, getByText, getByTestId} from '@testing-library/react';
import * as React from 'react';
import App, {
  CalculatorResult,
  NumberInput,
  SelectArithmeticOperation
} from './App';

describe('Simple Arithmetic Calculator Test', function () {
  let results, expected;
  describe('Results Paragraph', function () {
    test('displays the string passed to it', () => {
      render(<CalculatorResult calculatorResult={"10.2"}/>);
      expect(screen.getByText(/10\.2/)).toBeInTheDocument();
    });
  });

  describe('Number Input', function () {
    let input;
    beforeEach(() => {
      render(<NumberInput id={"foo"} name={"bar"} testId={"fizzbuzz"} />)
      input = screen.getByTestId('fizzbuzz');
    });

    test('takes id, name, and testid props', () => {
      results = [input.id, input.name];
      expected = ['foo', 'bar'];
      expect(results).toEqual(expected);
    });

    test('as with input elements of type text, it defaults to an empty string', () => {
      expect(input.value).toBe('');
    });

    test('state is controlled by underlying DOM element', () => {
      input.value = 'new input';
      expect(screen.getByDisplayValue('new input')).toBeInTheDocument();
    })
  });

  describe('Select Arithmetic Operation', function () {
    let select;
    beforeEach(() => {
      render(<SelectArithmeticOperation id={"foo"} name={"bar"} testId={"fizzbuzz"} />)
      select = screen.getByTestId('fizzbuzz');
    });

    test('default value should be add', () => {
      expect(select.value).toBe('add');
    });

    test('state is controlled by underlying DOM element', () => {
      select.value = 'multiply';
      expect(screen.getByDisplayValue('x')).toBeInTheDocument();
    });
  });
});