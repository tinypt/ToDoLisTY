import React , { Component } from 'react'

import TodoInput from './TodoInput'
import TodoList from './TodoList'
import ListFinish from './ListFinish'
import './TodoStyle.css'

class App extends Component {

  constructor(props){
    super(props)
    this.state ={
      items: []
      ,itemsDone: []
    }
    this.addList = this.addList.bind(this)
    this.doneList = this.doneList.bind(this)
  }


  addList(newTodo){
    this.setState({
      items: this.state.items.concat([newTodo])
    })
  }

  doneList(newDone){
    this.setState({
      itemsDone: this.state.itemsDone.concat([newDone])
    })
  }

  render() {
    let { items } = this.state
    let { itemsDone } = this.state

    return (
      <div id = "Todo" >
        <h1>To Do LisTY</h1>
        <TodoInput onAddList = { this.addList }/>
        <TodoList TodoItem = { items }/>
        <ListFinish ItemDone = { itemsDone }/>
      </div>
    )
  }
}

export default App