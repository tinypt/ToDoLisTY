import React, { Component } from 'react'

import Item from './Item'

class TodoList extends Component{
    
    render(){

        let { TodoItem } = this.props
        
        return(
            <div id = "Topic">To do
               <ul>
                    { TodoItem.map (todo => <Item items={ TodoItem } text = { todo } doDoingList= {this.props.doDoingList} doDeleteList = {this.props.doDeleteList} /> ) }
               </ul>
            </div>
        )
    }
}

export default TodoList