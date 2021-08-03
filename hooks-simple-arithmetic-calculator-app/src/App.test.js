import { render, screen, fireEvent} from '@testing-library/react';
import App from './App';

describe('Test Arithmetic Calculator', function () {
  let expected, results, firstInput, secondInput, operation, form, result;
  describe('Basic Operation', function () {
    beforeEach(() => {
      render(<App />);
      firstInput = screen.getByTestId('firstNumber');
      secondInput = screen.getByTestId('secondNumber');
      operation = screen.getByTestId('operation');
      form = screen.getByTestId('arithmeticForm');
      result = screen.getByTestId('result');
    });

    test("addition", function () {
      firstInput.value = "40.5";
      secondInput.value = "105.6";
      operation.value = "+";
      fireEvent.submit(form);
      expect(result.textContent).toBe('Result: 146.1');
    });

    test('subtraction', function () {
      firstInput.value = '300.67';
      secondInput.value = '523.92';
      operation.value = "-";
      fireEvent.submit(form);
      expect(result.textContent).toBe('Result: -223.25');
    });

    test('multiplication', function () {
      firstInput.value = '30.789';
      secondInput.value = '-2.445';
      operation.value = 'x';
      fireEvent.submit(form);
      expect(result.textContent).toBe('Result: -75.279105');
    });

    test('division', function () {
      firstInput.value = '-458.39';
      secondInput.value = '-540.90';
      operation.value = '/';
      fireEvent.submit(form);
      expect(result.textContent).toBe('Result: 0.84745794');
    });
  });
});