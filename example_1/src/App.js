import React, { Component } from "react";
import ItemTodo from "./components/ItemTodo";
import "./App.css";
import tick from "./img/tick.svg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      todoItems: [
        { title: "Dắt gấu đi chơi", isComplete: true },
        { title: "Đi shopping", isComplete: true },
        { title: "Đi siêu thị", isComplete: false },
        { title: "Nấu Cơm", isComplete: false },
        { title: "Rửa Bát", isComplete: false }
      ]
    };
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange=this.onChange.bind(this);
  }
  onItemClicked = item => {
    return e => {
      const isComplete = item.isComplete;
      const todoItems = this.state.todoItems;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      });
    };
  };
  // bắt sự kiên lúc người dùng ấn enter
  onKeyUp = e => {
    // console.log(e.target.value);
    // console.log(e.keyCode);
     // lấy giá trị tại thời điểm gõ
     let text = e.target.value;
    if (e.keyCode === 13) {
      // enter key
     
      if (!text) {
        return;
      }
      text = text.trim(); //xóa đi dấ cách ở đầu và cuối
      if (!text) {
        return;
      }
      this.setState({
        newItem:'',
        todoItems: [{ title: text, isComplete: false }, ...this.state.todoItems]
      });
    }
  };
  onChange=(e) => {
    this.setState({
      newItem: e.target.value
    })
  }
  render() {
    let a = this.state.todoItems.length;
    const {newItem} = this.state;
    return (
      <div className="App">
        <div className="Header">
          <img src={tick} width={32} height={32} />
          <input
            type="text"
            placeholder="Add new item"
            onKeyUp={this.onKeyUp}
            value={newItem}
            onChange={this.onChange}
          />
        </div>
        {a > 0 &&
          this.state.todoItems.map((item, index) => (
            <ItemTodo
              key={index}
              item={item}
              onClick={this.onItemClicked(item)}
            />
          ))}
        {a === 0 && <div>Không có gì</div>}
      </div>
    );
  }
}

export default App;
