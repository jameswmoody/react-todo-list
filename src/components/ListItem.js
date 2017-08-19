import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return (
        <div className="list-item">
          <div className="item-checkbox"></div>
          <li>{this.props.item.description}</li>
        </div>
    );
  }
}

export default ListItem;
