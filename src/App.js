import React, { Component } from 'react';
import List from './components/List';
import NewItemForm from './components/NewItemForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    }
  }

  componentWillMount() {
    this.setState({list: [
      {
        description: 'Wash Clothes'
      },
      {
        description: 'Buy Groceries'
      },
      {
        description: 'Cook Dinner'
      }
    ]});
  }

  handleAddItem(item) {
    let list = this.state.list;
    list.push(item);
    this.setState({list:list})
  }

  render() {
    return (
      <div className="App">
        <div className="list-container">
          <h1 className="heading">To Do List</h1>
          <NewItemForm addItem={this.handleAddItem.bind(this)} />
          <List list={this.state.list}/>
        </div>
      </div>
    );
  }
}


export default App;
