import React , { Component } from 'react'

import TodoInput from './TodoInput'
import TodoList from './TodoList'
import ListFinish from './ListFinish'
import Doing from './Doing'
import './TodoStyle.css'

import store from './redux/Store'
import { connect } from 'react-redux'
import { actions as appActions } from './redux/actions/actionApp'

class App extends Component {

  constructor(props){
    super(props)
    this.state ={
      items: []
      ,itemsDoing: []
      ,itemsDone: []
    }
    this.addList = this.addList.bind(this)
    this.doingList = this.doingList.bind(this)
    this.doneList = this.doneList.bind(this)
    this.deleteArray = this.deleteArray.bind(this)
    this.deleteArrayDoing = this.deleteArrayDoing.bind(this)
  }

  addList(newTodo){
    this.setState({
      items: this.state.items.concat([newTodo])
    })
  }

  doingList(newDoing){
    this.setState({
      itemsDoing: this.state.itemsDoing.concat([newDoing])
    })
  }

  doneList(newDone){
    this.setState({
      itemsDone: this.state.itemsDone.concat([newDone])
    })
  }

  deleteArray(text){
    let indexText = this.state.items.indexOf(text)
    this.state.items.splice(indexText,1)
    this.setState({
      items: this.state.items
    })
  }

  deleteArrayDoing(textDoing){
    let indexText = this.state.itemsDoing.indexOf(textDoing)
    this.state.itemsDoing.splice(indexText,1)
    this.setState({
      itemsDoing: this.state.itemsDoing
    })
  }

  render() {
    let { items } = this.state
    let { itemsDoing } = this.state
    let { itemsDone } = this.state

    return (
      <div id = "Todo" >
        <h1>To Do LisTY</h1>
        <TodoInput onAddList = { this.addList }/>
        <TodoList TodoItem = { this.state.items } doDoingList = { this.doingList } doDeleteList = { this.deleteArray } />
        <Doing ItemDoing = { this.state.itemsDoing } doDoneList = { this.doneList } doDeleteListDoing = { this.deleteArrayDoing }/>
        <ListFinish ItemDone = { this.state.itemsDone } /> 
      </div>
    )
  }
}

export default App