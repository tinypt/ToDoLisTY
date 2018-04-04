import React, { Component } from 'react'
import { connect } from 'react-redux'

import TodoInput from './TodoInput'
import TodoList from './TodoList'
import ListFinish from './ListFinish'
import Doing from './Doing'
import './TodoStyle.css'
import { actions as appActions } from './redux/actions/actionApp'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: []
      , itemsDoing: []
      , itemsDone: []
    }
  }

  render() {
    let { items } = this.state
    let { itemsDoing } = this.state
    let { itemsDone } = this.state

    return (
      <div id="Todo" >
        <h1>To Do LisTY</h1>
        <TodoInput />
        <TodoList />
        <Doing />
        <ListFinish />
      </div>
    )
  }
}

export default App