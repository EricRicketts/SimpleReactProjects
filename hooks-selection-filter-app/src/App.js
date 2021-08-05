import React from 'react';
import { classificationsAndAnimals } from "./javascript/data";
import { SelectionFilter } from "./components/selection_filter";
import './App.css';

function App(props) {
  const classifications = [
    'Classifications', 'Vertebrate', 'Warm-blooded',
    'Mammal', 'Cold-blooded,', 'Bird'
  ];
  const animals = [
    'Animals', 'Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'
  ];
  return (
    <main >
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
