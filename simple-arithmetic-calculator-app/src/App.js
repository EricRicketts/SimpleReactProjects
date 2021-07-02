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
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

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
          ref={this.input}
        />
      </>
    );
  }
}

class SelectArithmeticOperation extends React.Component {
  constructor(props) {
    super(props);
    this.select = React.createRef();
  }

  render() {
    return (
      <>
        <select
          name={this.props.name}
          id={this.props.id}
          data-testid={this.props.testId}
          ref={this.select}
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
    this.calculatorResult = '5';
    // this.state = { firstNumber: '', secondNumber: '', operation: 'add'};
    // this.updateCalculator = this.updateCalculator.bind(this);
    // this.calculatorResult = this.calculatorResult.bind(this);
  }

  /*
  areValidNumbers(firstNumber, secondNumber) {
    const decimalNumberRegex = /^\d+\.?\d*$/;
    return decimalNumberRegex.test(firstNumber) && decimalNumberRegex.test(secondNumber);
  }

  calculatorResult() {
    const nonValidNumber = [this.state.firstNumber, this.state.secondNumber].includes('');
    return nonValidNumber ? '' : this.doCalculation();
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
    return performOperation[this.state.operation].toFixed(2);
  }

  updateCalculator(firstNumber, secondNumber, operation) {
    if (this.areValidNumbers(firstNumber, secondNumber)) {
      this.setState({ firstNumber: firstNumber, secondNumber: secondNumber, operation: operation });
    } else {
      this.setState( { firstNumber: '', secondNumber: '', operation: 'add' });
    }
  }
 */
  render() {
    return (
      <main>
        <h1>Simple Arithmetic Calculator</h1>
        <CalculatorResult
          // calculatorResult={this.calculatorResult()}
          calculatorResult={this.calculatorResult}
        />
        {/*<CalculatorForm*/}
        {/*  onOperationSubmit={this.updateCalculator}*/}
        {/*  operation={this.state.operation}*/}
        {/*/>*/}
      </main>
    )
  }
}

export default App;
export { CalculatorResult, NumberInput, SelectArithmeticOperation };
