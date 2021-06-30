import './App.css';
import React from 'react';

class CalculatorResult extends React.Component {
  render() {
    return (
      <p>{this.props.calculatorResult}</p>
    );
  }
}

class CalculatorForm extends React.Component {
   render() {
     return (
        <form onSubmit={this.props.handleSubmit}>

        </form>
     );
   }
}

class  App extends React.Component {

}

export default App;
export { CalculatorResult, CalculatorForm };
