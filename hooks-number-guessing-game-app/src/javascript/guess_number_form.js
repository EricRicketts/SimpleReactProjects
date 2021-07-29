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
               data-testid="guess"
               maxLength="3"
        />
        <input type="submit"
               value="Guess"
               className={props.onGameOver ? 'inactive' : 'active'}
               data-testid="input-submit"
               disabled={props.onGameOver}
        />
      </fieldset>
    </form> 
  );
}