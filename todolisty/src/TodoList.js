import React, { Component } from 'react'

import Item from './Item'

class TodoList extends Component{
    
    render(){

        let { TodoItem } = this.props

        return(
            <div id = "Topic">To do
               <ul>
                    { TodoItem.map (todo => <Item text = { todo } doDoneList= {this.props.doDoneList} doDeleteList = {this.props.deleteArray} /> ) }
               </ul>
            </div>
        )
    }
}

export default TodoList