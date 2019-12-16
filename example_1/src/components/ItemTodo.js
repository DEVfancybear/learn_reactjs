import React, { Component } from "react";
import './ItemTodo.css';
class ItemTodo extends Component {
  render() {
      const items = this.props.item;
      let className = 'item_todo';
      if(items.isComplete) {
          //thêm class css khi click 
         className += ' item_done';
      }
    return (
      <div className={className}>
        <p>{items.title}</p>
      </div>
    );
  }
}
export default ItemTodo;
