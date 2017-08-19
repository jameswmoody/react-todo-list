import React, { Component } from 'react';
import List from './components/List';
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

  render() {
    console.log(this.state.list);
    return (
      <div className="App">
        <div className="list-container">
          <h1 className="heading">To Do List</h1>
          <List list={this.state.list}/>
        </div>
      </div>
    );
  }
}


export default App;
