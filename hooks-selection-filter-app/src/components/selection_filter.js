import React from 'react';

export function SelectionFilter(props) {
  function animalsHandler(event) {
    event.preventDefault();
    props.onAnimalsChange(event.target.value);
  }

  function classificationsHandler(event) {
    event.preventDefault();
    props.onClassificationsChange(event.target.value);
}

  function onSubmitHandler(event) {
    event.preventDefault();
    this.props.onClear(true);
  }

return (
  <form onSubmit={onSubmitHandler} className={props.className}>
    <fieldset>
      <select name="classifications"
              id="classifications"
              data-testid="classifications"
              onChange={classificationsHandler}
      >
        {props.classifications.map((classification, index) =>
          <option key={index} value={classification}>{classification}</option>)}
      </select>
      <select name="animals"
              id="animals"
              data-testid="animals"
              onChange={animalsHandler}
      >
        {props.animals.map((animal, index) =>
          <option key={index} value={animal}>{animal}</option>)}
      </select>
      <input type="submit"
             value="Clear"
      />
    </fieldset>
  </form>
  );
}