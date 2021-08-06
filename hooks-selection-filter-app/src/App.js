import React from 'react';
// import { classificationsAndAnimals } from "./javascript/data";
import { SelectionFilter } from "./components/selection_filter";
import './App.css';

function App(props) {
  const [classifications, setClassifications] = React.useState(() => clearClassifications());
  const [animals, setAnimals] = React.useState(() => clearAnimals());

  function clearAnimals() {
    const animalsTitle = props.dataSet[0].Titles[1];
    let allAnimals = props.dataSet.map(obj => Object.values(obj)).slice(1).flat(2);
    let uniqueAnimals = allAnimals.reduce((unique, animal) => {
      if (!unique.includes(animal)) unique.push(animal);
      return unique;
    }, []).sort();
    uniqueAnimals.unshift(animalsTitle);
    return uniqueAnimals;
  }

  function clearClassifications() {
    const classificationsTitle = props.dataSet[0].Titles[0];
    let classifications = props.dataSet.map(obj => Object.keys(obj)).flat().slice(1).sort();
    classifications.unshift(classificationsTitle);
    return classifications;
  }

  function onAnimalsChangeHandler(selectedAnimal) {
    const dataSetNoTitles = props.dataSet.slice(1);
    const allClassificationsForSelectedAnimal = dataSetNoTitles.reduce((allClassifications, obj) => {
      const [currentClassification, currentAnimals] = Object.entries(obj).flat();
      if (currentAnimals.includes(selectedAnimal)) allClassifications.push(currentClassification);
      return allClassifications;
    }, []).sort();
    setClassifications(allClassificationsForSelectedAnimal);
  }

  function onClassificationsChangeHandler(selectedClassification) {
    const dataSetNoTitles = props.dataSet.slice(1);
    const allAnimalsForSelectedClassification = dataSetNoTitles.find(obj => Object.keys(obj)[0] === selectedClassification);
    setAnimals(allAnimalsForSelectedClassification[selectedClassification].sort());
  }

  function onClearHandler() {
    setClassifications(clearClassifications());
    setAnimals(clearAnimals());
  }

  return (
    <main>
      <SelectionFilter classifications={classifications}
                       animals={animals}
                       onClassificationsChange={onClassificationsChangeHandler}
                       onAnimalsChange={onAnimalsChangeHandler}
                       onClear={onClearHandler}
      />
    </main>
  );
}

export default App;
