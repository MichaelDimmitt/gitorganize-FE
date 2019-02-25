

import React, {Component} from 'react';
import {render} from 'react-dom';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}) =>
  <li>{value}</li>
);

const SortableList = SortableContainer(({items}) => {
  console.log('state', {items}, 'state')
  return (
    <ul style={{display:'flex'}}>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

class SortableComponent extends Component {
  constructor(){
    super();
    this.state = {
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']
    };
    this.onSortEnd = this.onSortEnd.bind(this)
  }

  onSortEnd({oldIndex, newIndex}) {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex)
    });
  };
  render() {
    return <SortableList axis="x" items={this.state.items} onSortEnd={this.onSortEnd} />;
  }
}
document.addEventListener("DOMContentLoaded", function() {
  render(
    React.createElement(SortableComponent), document.getElementById("mount")
  );
})
