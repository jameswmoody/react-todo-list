import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {

  render() {
    let listItems;
    if (this.props.list) {
      listItems = this.props.list.map((item, i) => {
        return (
          <ListItem key={"item_"+i} item={item} />
        )
      });
    }

    return (
        <ul className="list">
          {listItems}
        </ul>
    );
  }
}

export default List;
