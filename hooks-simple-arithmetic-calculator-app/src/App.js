import React from 'react';
import Decimal from "decimal.js";
import './App.css';

function App() {
  const [result, setResult] = React.useState('');
  const calculate = {
    "+": add,
    "-": subtract,
    "x": multiply,
    "/": divide
  }

  function add(firstNumber, secondNumber) {
    return firstNumber.plus(secondNumber);
  }

  function divide(firstNumber, secondNumber) {
    return firstNumber.div(secondNumber);
  }

  function multiply(firstNumber, secondNumber) {
    return firstNumber.times(secondNumber);
  }

  function onSubmitHandler(event) {
    event.preventDefault();

    Decimal.set({ precision: 8, rounding: 7});
    let form = event.target;
    let formData = new FormData(form);

    const [firstNumber, secondNumber, operation] = [new Decimal(Number(formData.get('firstNumber'))),
      new Decimal(Number(formData.get('secondNumber'))), formData.get('operation')];

    let numericResult = new Decimal(calculate[operation](firstNumber, secondNumber));
    setResult(numericResult.toString())
  }

  function subtract(firstNumber, secondNumber) {
    return  firstNumber.minus(secondNumber);
  }


  return (
    <main>
      <h2>Simple Arithmetic Calculator</h2>
      <p data-testid="result">Result: {result}</p>
      <form data-testid="arithmeticForm" onSubmit={onSubmitHandler}>
        <fieldset>
          <input type="text"
                 name="firstNumber"
                 id="firstNumber"
                 data-testid="firstNumber"
                 className="numberInput"
                 placeholder="0"
                 min="-10000"
                 max="10000"
          />
          <select name="operation"
                  id="operation"
                  data-testid="operation"
          >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="x">x</option>
            <option value="/">/</option>
          </select>
          <input type="text"
                 name="secondNumber"
                 id="secondNumber"
                 data-testid="secondNumber"
                 className="numberInput"
                 placeholder="0"
                 min="-10000"
                 max="10000"
          />
          <input type="submit"
                 name="equals"
                 id="equals"
                 data-testid="equals"
                 value="="
          />
        </fieldset>
      </form>
    </main>
  );
}

export default App;
