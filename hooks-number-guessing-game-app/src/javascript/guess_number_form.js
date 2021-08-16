import React from 'react';

export function GuessNumberForm(props) {
  function handleSubmit(event) {
    event.preventDefault()
    props.onGuessSubmit(event);
  }

  return (
    <form onSubmit={handleSubmit} data-testid="form">
      <fieldset>
        <input type="text"
               id="guess"
               name="guess"
               maxLength="3"
               data-testid="guess"
        />
        <input type="submit"
               value="Guess"
               className={props.isGameOver ? 'inactive' : 'active'}
               data-testid="input-submit"
               disabled={props.isGameOver}
        />
      </fieldset>
    </form> 
  );
}
