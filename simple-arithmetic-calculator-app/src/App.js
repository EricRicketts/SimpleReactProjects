import './App.css';
import React from 'react';

class CalculatorResult extends React.Component {
  render() {
    return (
      <p>Result: {this.props.calculatorResult}</p>
    );
  }
}

class CalculatorForm extends React.Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const firstNumber = event.target.elements.firstNumber;
    const secondNumber = event.target.elements.secondNumber;
    const operation = event.target.elements[1].value;
    this.props.onOperationSubmit(firstNumber, secondNumber, operation);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <input
            type="text"
            id="firstNumber"
            name="firstNumber"
            placeholder="0"
            maxLength="7"
            size="7"
            data-testid="firstNumber"
          />
          <select name="operation" id="operation" data-testid="operation">
            <option value="add" selected>+</option>
            <option value="subtract">-</option>
            <option value="multiply">x</option>
            <option value="divide">/</option>
          </select>
          <input
            type="text"
            id="secondNumber"
            name="secondNumber"
            placeholder="0"
            maxLength="7"
            size="7"
            data-testid="secondNumber"
          />
          <button type="submit" data-testid="submit">=</button>
        </fieldset>
      </form>
    );
  }
}

class  App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstNumber: '', secondNumber: '' };
    this.doCalculatorOperation = this.doCalculatorOperation.bind(this);
    this.calculatorResult = this.calculatorResult.bind(this);
  }

  calculatorResult(operation) {
    // const firstNumber = Number.parseFloat(this.state.firstNumber);
    // const secondNumber = Number.parseFloat(this.state.secondNumber);
    const [firstNumber, secondNumber] = [5, 6];
    const performOperation = {
      'add': firstNumber + secondNumber,
      'subtract': firstNumber - secondNumber,
      'multiply': firstNumber * secondNumber,
      'divide': firstNumber / secondNumber
    }
    // return performOperation[operation].toString();
    return performOperation["add"];
  }

  doCalculatorOperation(firstNumber, secondNumber, operation) {
    const firstNumberFloat = Number.parseFloat(firstNumber);
    const secondNumberFloat = Number.parseFloat(secondNumber);
  }

  render() {
    return (
      <main>
        <h1>Simple Arithmetic Calculator</h1>
        <CalculatorResult
          calculatorResult={"5"}
        />
        <CalculatorForm
          onOperationSubmit={this.doCalculatorOperation}
        />
      </main>
    )
  }
}

export default App;
export { CalculatorResult, CalculatorForm };
