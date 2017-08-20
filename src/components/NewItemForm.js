import React, { Component } from 'react';
import uuid from 'uuid';

class NewItemForm extends Component {
  constructor() {
    super();
    this.state = {
      newItem: {}
    }
  }

  handleSubmit(event) {
    if (this.refs.description.value === '') {
      alert('Please enter a description')
    } else {
      this.setState({newItem: {
        id: uuid.v4(),
        description: this.refs.description.value
      }}, function () {
        this.props.addItem(this.state.newItem);
      });
      this.refs.description.value = ''
    }
    event.preventDefault();
  }

  render() {
    return (
        <div className="form-container">
          <form className="new-item-form" onSubmit={this.handleSubmit.bind(this)}>
            <input className="form-field" type="text" ref="description" placeholder="What needs doing?" />
            <button className="form-submit" type="submit">Add</button>
          </form>
        </div>
    );
  }
}

export default NewItemForm;
