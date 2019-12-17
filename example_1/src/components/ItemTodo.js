import React, { Component } from "react";
import "./ItemTodo.css";
import classNames from "classnames";
import imgCheck from "../img/check.svg";
import imgCheckDone from "../img/success.svg";
class ItemTodo extends Component {
  render() {
    const { item, onClick } = this.props;
    let url = imgCheck;
    if (item.isComplete) {
      url = imgCheckDone;
    }
    return (
      <div
        className={classNames("item_todo", {
          item_done: item.isComplete
        })}
      >
        <img onClick={onClick} src={url} width={32} height={32} />
        <p>{this.props.item.title}</p>
      </div>
    );
  }
}
export default ItemTodo;
