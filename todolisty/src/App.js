import React, { Component } from 'react'

import TodoInput from './TodoInput'
import TodoList from './TodoList'

class App extends Component {

  constructor(props){
    super(props)
    this.state ={
      items: []
    }
    this.addList = this.addList.bind(this)
  }

  addList(newTodo){
    this.setState({
      items: this.state.items.push(newTodo)
    })
  }

  render() {
    let {items} = this.state

    return (
      <div>
        <TodoInput onAddList={this.addList}/>
        <TodoList TodoItem={items}/>
      </div>
    )
  }
}

export default App