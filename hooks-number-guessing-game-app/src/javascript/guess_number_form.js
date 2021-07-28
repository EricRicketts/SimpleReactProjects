export function GuessNumberForm(props) {
  return (
    <form onSubmit={props.onGuessSubmit}>
      <fieldset>
        <input type="text"
               id="guess"
               name="guess"
               maxLength="3"
        />
        <input type="submit"
               value="Guess"
               className={"active"}
               disabled={props.onGameOver}
        />
      </fieldset>
    </form> 
  );
}