import React, { Component } from "react";
import { connect } from "react-redux";

import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";
import ListFinish from "./component/ListFinish";
import Doing from "./component/Doing";
import "./css/TodoStyle.css";
import { actions as appActions } from "./redux/actions/actionApp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemsDoing: [],
      itemsDone: []
    };
  }

  render() {
    let { items } = this.state;
    let { itemsDoing } = this.state;
    let { itemsDone } = this.state;

    return (
      <div id="Todo">
        <h1>To Do LisTY</h1>
        <TodoInput />
        <TodoList />
        <Doing />
        <ListFinish />
      </div>
    );
  }
}

export default App;
