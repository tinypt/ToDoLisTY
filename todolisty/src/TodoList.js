import React , {Component} from 'react'

import Item from './Item'

class TodoList extends Component{
    render(){
        let {TodoItem} = this.props

        return(
            <div>
               <ul>
                {TodoItem.map(todo =><li><Item text ={todo}/></li>)}
               </ul>
                
            </div>
        )
    }
}

export default TodoList