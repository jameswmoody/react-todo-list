import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Draggable from 'react-draggable';
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
        id: uuid.v4(),
        description: 'Wash Clothes',
      },
      {
        id: uuid.v4(),
        description: 'Buy Groceries',
      },
      {
        id: uuid.v4(),
        description: 'Cook Dinner',
      }
    ]});
  }

  handleAddItem(item) {
    let list = this.state.list;
    list.push(item);
    this.setState({list:list});
  }

  updateList() {
    let list = this.state.list;
    this.setState({list:list});
    console.log('updated');
  }

  render() {
    return (
        <div className="App">
          <div className="list-container">
            <h1 className="heading">To Do List</h1>
            <NewItemForm addItem={this.handleAddItem.bind(this)} />
            <List list={this.state.list} onClick={this.updateList.bind(this)}/>
          </div>
        </div>
    );
  }
}

$(document).ready(function() {
  $('.list').on('click', '.list-item', function() {
    $(this).toggleClass('crossout')
  });

  $('.list').on('dblclick', '.list-item', function() {
    $(this).fadeOut('fast');
  });
});

export default App;
