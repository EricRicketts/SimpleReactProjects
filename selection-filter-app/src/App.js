import './App.css';
import React from 'react';

class SelectComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectChoice = this.handleSelectChoice.bind(this);
  }

  handleSelectChoice(event) {
    this.props.onHandleSelectChoice(event.target.value);
  }

  render() {
    return (
      <select
        id={this.props.idNameTestIdAttributes}
        name={this.props.idNameTestIdAttributes}
        data-testid={this.props.idNameTestIdAttributes}
        onChange={this.handleSelectChoice}>
        {this.props.options.map(option => <option value={option}>{option}</option>)}
      </select>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClassificationSelection = this.handleClassificationSelection.bind(this);
    this.handleAnimalSelection = this.handleAnimalSelection.bind(this);
  }

  handleClassificationSelection(event) {
    event.preventDefault();
  }

  handleAnimalSelection(event) {
    event.preventDefault();
  }

  render() {
    const animalList = ['Animals', 'Bear', 'Ostrich'];
    const classificationList = ['Classification', 'Vertebrate', 'Bird'];

    const [classification, animals] = ['Classifications', 'Animals'];
    return (
      <form>
        <SelectComponent
          options={classificationList}
          idNameTestIdAttributes={classification}
          onHandleSelectChoice={this.handleClassificationSelection}
        />
        <SelectComponent
          options={animalList}
          idNameTestidAttributes={animals}
          onHandleSelectChoice={this.handleAnimalSelection}
        />
        <button type="reset">Clear</button>
      </form>
    );
  }
}

export default App;
