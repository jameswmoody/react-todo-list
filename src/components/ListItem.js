import React, { Component } from 'react';
import checkmark from './check.svg';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false
    };
  }

  toggleItemComplete(id) {
    const currentState = this.state.complete
    this.setState({complete: !currentState});
  }

  render() {
    return (
        <div onClick={this.toggleItemComplete.bind(this, this.props.item.id)} className="list-item">
          <div className={this.state.complete ? 'complete-item-checkbox': 'item-checkbox'}>
            <img src={checkmark} alt='checkmark' />
          </div>
          <li>{this.props.item.description}</li>
        </div>
    );
  }
}

export default ListItem;
