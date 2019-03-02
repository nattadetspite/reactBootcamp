import React, { Component } from "react";
import MyInput from "../MyInput";
import TodoListItem from "../TodoListItem";
import { TodoListWrapper } from "./styled";

const renderTodoItem = (todos, handleEdit, handleRemove) => {
  return todos.map((todo, i) => (
    <TodoListItem
      key={i}
      todo={todo}
      handleEdit={handleEdit}
      handleRemove={handleRemove}
    />
  ));
};

class TodoList extends Component {
  constructor(props) {
    super(props);
    const { defaultTodoText = "" } = props;
    this.state = {
      message: defaultTodoText,
      todos: []
    };
  }

  clearMessage = () => {
    this.setState({ message: "" });
  };

  handleMessage = e => {
    const { value } = e.target;
    this.setState({ message: value });
  };

  onPushTodo = async e => {
    const { message } = this.state;
    if (message.trim() === "") return;
    await this.setState(({ todos }) => ({
      todos: [
        ...todos,
        {
          id: btoa(new Date().getTime().toString()),
          message
        }
      ]
    }));
    this.clearMessage();
  };

  removeById = id => {
    const { todos } = this.state;
    const newTodos = todos.filter(todo => todo.id !== id);
    this.setState({ todos: newTodos });
  };

  editById = id => {
    const { todos } = this.state;
    let findIndex = null;
    const editTodo = todos.find((todo, index) => {
      if (todo.id === id) {
        findIndex = index;
        return true;
      }
      return false;
    });
    const editMessage = prompt("Edit this todo", editTodo.message);
    editTodo.message = editMessage;
    const newTodos = [...todos];
    newTodos[findIndex] = editTodo;
    this.setState({ todos: newTodos });
  };

  render() {
    const { message, todos } = this.state;
    return (
      <TodoListWrapper>
        <MyInput
          value={message}
          onClear={this.clearMessage}
          onChange={this.handleMessage}
          onEnter={this.onPushTodo}
        />
        {renderTodoItem(todos, this.editById, this.removeById)}
      </TodoListWrapper>
    );
  }
}

export default TodoList;
