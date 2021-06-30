import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import * as React from 'react';
import App, {
 CalculatorResult,
 CalculatorForm
} from './App';

describe('App test', function () {
 describe('CalculatorResult test', function () {
  test('renders the result passed to it', () => {
    render(<CalculatorResult calculatorResult={"5"} />);
    let p = screen.getByText('5');
    expect(p.constructor.name).toBe('HTMLParagraphElement');
  });
 });
});