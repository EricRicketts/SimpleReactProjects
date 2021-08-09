import React from 'react';
import { classificationsAndAnimals } from "./javascript/data";
import { SelectionFilter } from "./components/selection_filter";
import './App.css';

function App() {
  const dataSet = classificationsAndAnimals;
  const [classifications, setClassifications] = React.useState(() => clearClassifications());
  const [animals, setAnimals] = React.useState(() => clearAnimals());

  function clearAnimals() {
    const animalsTitle = dataSet[0].Titles[1];
    let allAnimals = [];
    let allClassificationsAndAnimals = dataSet.slice(1);
    allClassificationsAndAnimals.forEach(currentClassificationAndAnimals => {
      for (const currentClassification in currentClassificationAndAnimals) {
        allAnimals.push(...currentClassificationAndAnimals[currentClassification]);
      }
    })
    let uniqueAnimals = allAnimals.reduce((unique, animal) => {
      if (!unique.includes(animal)) unique.push(animal);
      return unique;
    }, []).sort();
    uniqueAnimals.unshift(animalsTitle);
    return uniqueAnimals;
  }

  function clearClassifications() {
    const classificationsTitle = dataSet[0].Titles[0];
    let allClassifications = [];
    let allClassificationsAndAnimals = dataSet.slice(1);
    allClassificationsAndAnimals.forEach(currentClassificationsAndAnimals => {
      for (const currentClassification in currentClassificationsAndAnimals) {
        allClassifications.push(currentClassification);
      }
    });
    allClassifications.sort().unshift(classificationsTitle);
    return allClassifications;
  }

  function clearSelectElement(selectElement) {
    let numberOfOptions = selectElement.options.length;
    for (let i = numberOfOptions - 1; i >= 0; i -= 1) {
      selectElement.options[i] = null;
    }
  }

  function onAnimalsChangeHandler(event) {
    let selectElement = event.target;
    let selectedAnimal = event.target.value;

    clearSelectElement(selectElement);
    const dataSetNoTitles = dataSet.slice(1);

    const allClassificationsForSelectedAnimal = dataSetNoTitles.reduce((allClassifications, obj) => {
      const [currentClassification, currentAnimals] = Object.entries(obj).flat();
      if (currentAnimals.includes(selectedAnimal)) allClassifications.push(currentClassification);
      return allClassifications;
    }, []).sort();
    setClassifications(allClassificationsForSelectedAnimal);
  }

  function onClassificationsChangeHandler(event) {
    let classificationSelect = event.target;
    let selectedClassification = event.target.value;
    const dataSetNoTitles = dataSet.slice(1);

    let filteredClassificationSelectOptions = Array.from(classificationSelect.options).reduce((filteredOptions, option) => {
      if (option.value !== 'Classification') filteredOptions.push(option.value);
      return filteredOptions;
    }, []).sort();
    setClassifications(filteredClassificationSelectOptions);
    
    const allAnimalsForSelectedClassification = dataSetNoTitles.find(currentClassificationAndItsAnimals => {
      return Object.keys(currentClassificationAndItsAnimals)[0] === selectedClassification;
    });
    setAnimals(allAnimalsForSelectedClassification[selectedClassification].sort());
  }

  function onClearHandler(event) {
    setClassifications(() => clearClassifications());
    setAnimals( () => clearAnimals());
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
