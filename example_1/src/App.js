import React, { Component } from "react";
import ItemTodo from "./components/ItemTodo";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      { title: "Dắt gấu đi chơi", isComplete: true},
      { title: "Đi shopping", isComplete: true},
      { title: "Đi siêu thị"}
    ];
  }
  render() {
    let a = this.todoItems.length;
    return (
      <>
        {a > 0 &&
          this.todoItems.map((item, index) => (
            <ItemTodo key={index} item={item} />
          ))}
        {a === 0 && <div>Không có gì</div>}
        {/* dùng map để biến 1 arr gồm các obj phải thêm key */}
      </>
    );
  }
}

export default App;
