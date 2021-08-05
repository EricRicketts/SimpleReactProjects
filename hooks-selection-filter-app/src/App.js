import React from 'react';
// import { classificationsAndAnimals } from "./javascript/data";
import { SelectionFilter } from "./components/selection_filter";
import './App.css';

function App(props) {
  const dataSet = props.dataSet;
  const [classifications, setClassifications] = React.useState(() => clearClassifications());
  const [animals, setAnimals] = React.useState(() => clearAnimals());

  function clearAnimals() {
    const animalsTitle = dataSet[0].Titles[1];
    let allAnimals = dataSet.map(obj => Object.values(obj)).slice(1).flat(2);
    let uniqueAnimals = allAnimals.reduce((unique, animal) => {
      if (!unique.includes(animal)) unique.push(animal);
      return unique;
    }, []).sort();
    uniqueAnimals.unshift(animalsTitle);
    return uniqueAnimals;
  }

  function clearClassifications() {
    const classificationsTitle = dataSet[0].Titles[0];
    let classifications = dataSet.map(obj => Object.keys(obj)).flat().slice(1).sort();
    classifications.unshift(classificationsTitle);
    return classifications;
  }

  return (
    <main>
      <SelectionFilter className="selectionFilter"
                       classifications={classifications}
                       animals={animals}
                       onClassificationsChange={() => {}}
                       onAnimalsChange={() => {}}
                       onClear={() => {}}
      />
    </main>
  );
}

export default App;
