import './App.css';
import React from 'react';

class CalculatorResult extends React.Component {
  render() {
    return (
      <p data-testid="result">Result: {this.props.calculatorResult}</p>
    );
  }
}

class NumberInput extends React.Component {
  render() {
    return (
      <>
        <input
          type="text"
          placeholder="0"
          maxLength="7"
          size="7"
          id={this.props.id}
          name={this.props.name}
          data-testid={this.props.testId}
        />
      </>
    );
  }
}

class SelectArithmeticOperation extends React.Component {
  render() {
    return (
      <>
        <select
          name={this.props.name}
          id={this.props.id}
          data-testid={this.props.testId}
        >
          <option value="add">+</option>
          <option value="subtract">-</option>
          <option value="multiply">x</option>
          <option value="divide">/</option>
        </select>
      </>
    );
  }

}

class  App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstNumber: '', secondNumber: '', operation: 'add' };
    this.calculatorResult = this.calculatorResult.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.form = React.createRef();
  }

  areValidNumbers(firstNumber, secondNumber) {
    const decimalNumberRegex = /^-?\d+\.?\d*$/;
    return decimalNumberRegex.test(firstNumber) && decimalNumberRegex.test(secondNumber);
  }

  calculatorResult() {
    const [firstNumber, secondNumber, operation] = [
      this.state.firstNumber, this.state.secondNumber, this.state.operation
    ];
    if (!this.areValidNumbers(firstNumber, secondNumber)) {
      return '';
    } else if (operation === 'divide' && Number.parseFloat(secondNumber) === 0) {
      return 'divide by zero';
    } else {
      return this.doCalculation();
    }
  }

    doCalculation() {
    const firstNumber = Number.parseFloat(this.state.firstNumber);
    const secondNumber = Number.parseFloat(this.state.secondNumber);
    const performOperation = {
      'add': firstNumber + secondNumber,
      'subtract': firstNumber - secondNumber,
      'multiply': firstNumber * secondNumber,
      'divide': firstNumber / secondNumber
    }
    const result = performOperation[this.state.operation];
    return Math.abs(result) < 0.01 ? result.toExponential(2) : result.toFixed(2);
  }

  handleSubmit(event) {
    event.preventDefault();
    let [firstNumber, secondNumber, operation] = [
      this.form.current.elements.firstNumber.value,
      this.form.current.elements.secondNumber.value,
      this.form.current.elements.operation.value
    ];
    this.setState({ firstNumber: firstNumber, secondNumber: secondNumber, operation: operation });
  }

  render() {
    return (
      <main>
        <h1>Simple Arithmetic Calculator</h1>
        <CalculatorResult
          calculatorResult={this.calculatorResult()}
        />
        <form
          onSubmit={this.handleSubmit}
          data-testid={"calculatorForm"}
          ref={this.form}
        >
          <fieldset>
            <NumberInput
              id={'firstNumber'}
              name={'firstNumber'}
              testId={'firstNumber'}
            />
            <SelectArithmeticOperation
              id={'operation'}
              name={'operation'}
              testId={'operation'}
            />
            <NumberInput
              id={'secondNumber'}
              name={'secondNumber'}
              testId={'secondNumber'}
            />
            <button type="submit">=</button>
          </fieldset>
        </form>
      </main>
    )
  }
}

export default App;
export { CalculatorResult, NumberInput, SelectArithmeticOperation };
