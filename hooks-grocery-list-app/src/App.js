import React from 'react';
import './App.css';
import {UnorderedList} from "./components/ul_list";

function App() {
  const [items, setItems] = React.useState([]);

  function onSubmitHandler(event) {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    let quantityAndItemString = `${formData.get('quantity')} ${formData.get('item')}`;
    setItems(items => [...items, quantityAndItemString]);
  }
  return (
    <main>
      <form onSubmit={onSubmitHandler} data-testid="groceryForm">
        <h2>Add An Item</h2>
        <fieldset>
          <label htmlFor="item">Description</label>
          <input type="text"
                 id="item"
                 name="item"
                 data-testid="item"
                 placeholder="Item Description"
          />
          <label htmlFor="quantity">Quantity</label>
          <input type="number"
                 id="quantity"
                 name="quantity"
                 data-testid="quantity"
                 placeholder="1"
                 min={1}
                 max={100}
          />
          <input type="submit"
                 value="Add"
                 data-testid="addItem"
          />
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
