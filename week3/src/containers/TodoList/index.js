import React, { Component } from "react";
import TodoListComponent from "../../components/TodoList";
import { withRouter } from "react-router-dom";
class TodoList extends Component {
  constructor(props) {
    super(props);
    // console.log("todolist props", props);
    const { message = "" } = props.match.params;
    this.state = {
      defaultTodoText: message
    };
  }

  render() {
    const { defaultTodoText } = this.state;
    return <TodoListComponent defaultTodoText={defaultTodoText} />;
  }
}

export default withRouter(TodoList);
