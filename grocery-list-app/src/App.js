import './App.css';
import React from 'react';

class GroceryList extends React.Component {
  render() {
    return (
      <ul id="groceryList" data-testid="groceryList">
        {this.props.list.map((item, index) => <li key={index}>{`${item.quantity} ${item.name}`}</li>)}
      </ul>
    );
  }
}

class GroceryListEntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <fieldset>
          <h2>Add an item</h2>
          <div className="groceryItemDescription">
            <label htmlFor="item">Item name</label>
            <input type="text" id="item" name="item" data-testid="item" />
          </div>
          <div className="groceryItemDescription">
            <label htmlFor="quantity">Quantity</label>
            <input type="text" id="quantity" name="quantity" data-testid="quantity" />
          </div>
        </fieldset>
        <button type="submit">Add</button>
      </form>
    );
  }
}

class App extends React.Component {
  render() {
    const list = [
      { quantity: "1", name: "Peanut Butter" },
      { quantity: "2", name: "Strawberry Jelly" },
      { quantity: "1", name: "Loaf Of Bread" }
    ];
    return (
      <>
        <GroceryListEntryForm />
        <div id="groceryList">
          <h2>Groceries</h2>
          <GroceryList list={list} />
        </div>
      </>
    );
  }
}

export default App;
