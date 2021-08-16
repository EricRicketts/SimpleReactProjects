import React from 'react';
import { classificationsAndAnimals } from "./javascript/data";
import { SelectionFilter } from "./components/selection_filter";
import './App.css';

function App() {
  const dataSet = classificationsAndAnimals;
  const [classifications, setClassifications] = React.useState(clearClassifications());
  const [animals, setAnimals] = React.useState(clearAnimals());

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

  function onAnimalsChangeHandler(event) {
    let animalSelectElementOptions = Array.from(event.target.options);
    let selectedAnimal = event.target.value;
    let animalSelectElementOptionsValues = animalSelectElementOptions
      .map(option => option.value)
      .filter(value => value !== 'Animals' || value !== selectedAnimal)
      .sort();
    const dataSetNoTitles = dataSet.slice(1);

    // let filteredAnimalSelectOptions = Array.from(animalSelect.options).reduce((filteredOptions, option) => {
    //   if (option.value !== 'Animals') filteredOptions.push(option.value);
    //   return filteredOptions;
    // }, []).sort();
    setAnimals([selectedAnimal].concat(animalSelectElementOptionsValues));

    const classificationsForSelectedAnimal = dataSetNoTitles
      .reduce((allClassifications, currentClassificationAndAnimals) => {
        const [currentClassification, currentAnimals] = Object.entries(currentClassificationAndAnimals).flat();
        if (currentAnimals.includes(selectedAnimal)) allClassifications.push(currentClassification);
        return allClassifications;
      }, []).sort();
    setClassifications(classificationsForSelectedAnimal);
  }

  function onClassificationsChangeHandler(event) {
    let classificationSelectElementOptions = Array.from(event.target.options);
    let selectedClassification = event.target.value;
    let classificationSelectElementOptionsValues = classificationSelectElementOptions
      .map(option => option.value)
      .filter(value => value !== 'Classification' || value !== selectedClassification)
      .sort();
    const dataSetNoTitles = dataSet.slice(1);

    setClassifications([selectedClassification].concat(classificationSelectElementOptionsValues));

    const animalsForSelectedClassification = dataSetNoTitles.find(currentClassificationAndItsAnimals => {
      return Object.keys(currentClassificationAndItsAnimals)[0] === selectedClassification;
    });
    setAnimals(animalsForSelectedClassification[selectedClassification].sort());
  }

  function onClearHandler(event) {
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
