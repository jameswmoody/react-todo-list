import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return (
        <div className="list-item">
          <li>{this.props.item.description}</li>
        </div>
    );
  }
}

export default ListItem;
