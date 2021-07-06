import './App.css';
import React from 'react';

class GroceryList extends React.Component {
  render() {
    return (
      <ul id="groceryList" data-testid="groceryList">
        {this.props.list.map((obj, index) => <li key={index}>{`${obj.quantity} ${obj.description}`}</li>)}
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
    const description = event.target.elements.description.value;
    const quantity = event.target.elements.quantity.value;
    this.props.onSubmitHanlder(quantity, description);
    event.target.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} data-testid="groceryListEntryForm" >
        <fieldset>
          <h2>Add an item</h2>
          <div className="groceryItemDescription">
            <label htmlFor="description">Description</label>
            <input type="text" id="description" name="description" data-testid="description" />
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
  constructor(props) {
    super(props);
    this.state = { quantity: '', description: '' };
    this.appHandleSubmit = this.appHandleSubmit.bind(this);
    this.groceryList = [];
  }

  appHandleSubmit(quantity, description) {
    const obj = { quantity, description }
    this.setState(obj);
    this.groceryList.push(obj);
  }
  render() {
    const list = this.groceryList;
    return (
      <>
        <GroceryListEntryForm onSubmitHanlder={this.appHandleSubmit}/>
        <div id="groceryListContainer">
          <h2>Groceries</h2>
          <GroceryList list={list} />
        </div>
      </>
    );
  }
}

export default App;
export { GroceryList, GroceryListEntryForm };