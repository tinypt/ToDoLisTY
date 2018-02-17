import React, { Component } from 'react'

class TodoInput extends Component{

    constructor(props){
        super(props)
        this.state = {
            newTodo: ""
        }
        this.addClicked = this.addClicked.bind(this)
    }

    addClicked(){
        let { onAddList } = this.props
        onAddList(this.state.newTodo)
        this.setState({
                newTodo: ""
        })
    }

    render(){
       
        let {newTodo} = this.state

        return(
            <div>
                <input 
                    type = "text"
                    value = { newTodo }
                    onChange = { (e)=>this.setState({ newTodo: e.target.value }) }
                />
                <button onClick = { this.addClicked }>ADD</button>
            </div>
        )
    }
}

export default TodoInput
