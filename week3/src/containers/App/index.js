import React, { Component } from "react";
import { Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <h1>Home page</h1>
        <h1>Link to another page</h1>
        <ul>
          <li>
            <Link to="/todos">Todo list</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
