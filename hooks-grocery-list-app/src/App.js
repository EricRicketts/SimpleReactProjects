import './App.css';
import {UnorderedList} from "./components/ul_list";

function App() {
  let items = ['1 First Item', '2 Second Item'];
  return (
    <main>
      <form>
        <h2>Add An Item</h2>
        <fieldset>
          <label htmlFor="item">Description</label>
          <input type="text"
                 id="item"
                 name="item"
                 placeholder="Item Description"
          />
          <label htmlFor="quantity">Quantity</label>
          <input type="number"
                 id="quantity"
                 name="quantity"
                 value="1"
                 min={1}
                 max={100}
          />
          <input type="submit" value="Add"/>
        </fieldset>
      </form>
      <div className="listContainer">
        <h2 className="listTitle">Groceries</h2>
        <UnorderedList
          className="list"
          listItems={items}
        />
      </div>
    </main>
  );
}

export default App;
