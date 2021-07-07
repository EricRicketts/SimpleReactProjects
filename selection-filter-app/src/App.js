import './App.css';
import React from 'react';

class SelectComponent extends React.Component {
  render() {
    return (
      <select
        id={this.props.idNameTestIdAttributes}
        name={this.props.idNameTestIdAttributes}
        data-testid={this.props.idNameTestIdAttributes}
        value={this.props.value}
        onChange={this.props.handleChange}>
        {this.props.optionList.map((option, index) => <option key={index} value={option}>{option}</option>)}
      </select>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { classification: 'Classification', animal: 'Animals' }
    this.handleClassificationSelection = this.handleClassificationSelection.bind(this);
    this.handleAnimalSelection = this.handleAnimalSelection.bind(this);
    const allAnimals = this.allAnimals(this.props.data);
    this.animalList = ['Animals', ...allAnimals]
    this.classificationList = ['Classification'];
  }

  allAnimals(data) {
    return data.reduce((memo, dataItem) => {
      memo.push(Object.keys(dataItem)[0]);
      return memo;
    }, [])
  }

  handleClassificationSelection(optionValue) {
  }

  handleAnimalSelection(optionValue) {
  }

  render() {
    return (
      <form>
        <SelectComponent
          optionList={this.classificationList}
          idNameTestIdAttributes={this.props.classification}
          value={this.state.classification}
          handleChange={this.handleClassificationSelection}
        />
        <SelectComponent
          optionList={this.animalList}
          idNameTestIdAttributes={this.props.animals}
          value={this.state.animal}
          handleChange={this.handleAnimalSelection}
        />
        <button type="reset">Clear</button>
      </form>
    );
  }
}

export default App;
export { SelectComponent };
