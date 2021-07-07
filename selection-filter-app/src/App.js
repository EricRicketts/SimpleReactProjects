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
    this.resetSelects = this.resetSelects.bind(this);
    const allAnimals = this.allAnimals(this.props.data);
    const allClassifications = this.allClassifications(this.props.data);
    this.animalList = ['Animals', ...allAnimals]
    this.classificationList = ['Classification', ...allClassifications];
  }

  allAnimals(data) {
    return data.reduce((memo, dataItem) => {
      memo.push(Object.keys(dataItem)[0]);
      return memo;
    }, [])
  }

  allClassifications(data) {
    return data.reduce((memo, dataItem) => {
      const classifications = Object.values(dataItem).flat();
      classifications.forEach(classification => {
        if (!memo.includes(classification)) memo.push(classification);
      });
      return memo;
    }, []);
  }

  handleClassificationSelection(event) {
    event.preventDefault();
    const classificationValue = event.target.value;
    this.setState({ classification: classificationValue });
    this.animalList = this.props.data.reduce((memo, dataItem) => {
      Object.entries(dataItem).forEach(arr => {
        const [key, value] = [arr[0], arr[1]];
          if (value.includes(classificationValue)) memo.push(key);
      });
      return memo;
    }, []);
  }

  handleAnimalSelection(event) {
    event.preventDefault();
    const animalValue = event.target.value;
    this.setState({ animal: animalValue });
    const foundItem = this.props.data.find(dataItem => {
      return Object.keys(dataItem)[0] === animalValue;
    });
    this.classificationList = Object.values(foundItem).flat();
  }

  resetSelects(event) {
    event.preventDefault();
    this.setState({ classification: 'Classification', animal: 'Animals' });
    const allAnimals = this.allAnimals(this.props.data);
    const allClassifications = this.allClassifications(this.props.data);
    this.animalList = ['Animals', ...allAnimals]
    this.classificationList = ['Classification', ...allClassifications];
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
        <button type="reset" onClick={this.resetSelects}>Clear</button>
      </form>
    );
  }
}

export default App;
export { SelectComponent };
