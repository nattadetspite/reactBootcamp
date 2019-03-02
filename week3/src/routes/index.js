import React, { Component } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import App from "../containers/App";
import TodoList from "../containers/TodoList";
class RouteComponent extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <App />} />
          <Route path="/todos/:message?" component={() => <TodoList />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default RouteComponent;
