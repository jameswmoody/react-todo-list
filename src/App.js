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
        id:uuid.v4(),
        description: 'Wash Clothes',
      },
      {
        id:uuid.v4(),
        description: 'Buy Groceries',
      },
      {
        id:uuid.v4(),
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
      <Draggable
        axis="x"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div className="App">
          <div className="list-container">
            <h1 className="heading">To Do List</h1>
            <NewItemForm addItem={this.handleAddItem.bind(this)} />
            <List list={this.state.list} onClick={this.updateList.bind(this)}/>
          </div>
        </div>
      </Draggable>
    );
  }
}

$(document).ready(function() {
  $('.list').on('click', '.list-item', function() {
    $(this).toggleClass('crossout')
  });
});

export default App;
