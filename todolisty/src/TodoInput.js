import React , {Component} from 'react'

class TodoInput extends Component{

    constructor(props){
        super(props)
        this.state = {
            newTodo: ""
        }
    }

    render(){
        let {addList} = this.props

        return(
            <div>
                <input onChange={(e)=>this.setState({newTodo: e.target.value})}/>
                <button>ADD</button>
            </div>
        )
    }
}

export default TodoInput
