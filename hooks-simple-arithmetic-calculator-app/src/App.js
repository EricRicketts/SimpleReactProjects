import './App.css';

function App() {
  return (
    <main>
      <h2>Simple Arithmetic Calculator</h2>
      <p>Result:</p>
      <form>
        <fieldset>
          <input type="text"
                 name="firstNumber"
                 id="firstNumber"
                 data-testid="firstNumber"
                 className="numberInput"
                 placeholder="0"
                 min="-10000"
                 max="10000"
          />
          <select name="operation"
                  id="operation">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="x">x</option>
            <option value="/">/</option>
          </select>
          <input type="text"
                 name="secondNumber"
                 id="secondNumber"
                 data-testid="secondNumber"
                 className="numberInput"
                 placeholder="0"
                 min="-10000"
                 max="10000"
          />
          <input type="submit" name="equals" id="equals" value="="/>
        </fieldset>
      </form>
    </main>
  );
}

export default App;
