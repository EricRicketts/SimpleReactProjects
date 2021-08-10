import React from 'react';

export function SelectionFilter(props) {
  function animalsHandler(event) {
    event.preventDefault();
    props.onAnimalsChange(event);
  }

  function classificationsHandler(event) {
    event.preventDefault();
    props.onClassificationsChange(event);
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    props.onClear(event);
  }

return (
  <form onSubmit={onSubmitHandler} data-testid="selectionFilter">
    <fieldset>
      <select name="classifications"
              id="classifications"
              data-testid="classifications"
              value={props.classification}
              onChange={classificationsHandler}
      >
        {props.classificationOptions.map((classification, index) =>
          <option key={index} value={classification}>{classification}</option>)
        }
      </select>
      <select name="animals"
              id="animals"
              data-testid="animals"
              value={props.animal}
              onChange={animalsHandler}
      >
        {props.animalOptions.map((animal, index) =>
          <option key={index} value={animal}>{animal}</option>)
        }
      </select>
      <input type="submit"
             value="Clear"
      />
    </fieldset>
  </form>
  );
}