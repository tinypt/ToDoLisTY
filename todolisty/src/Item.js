import React, { Component } from 'react'

class Item extends Component{

    constructor(props){
        super(props)
        this.state = {
            finish: false
        }
        this.toggle = this.toggle.bind(this)
        this.done = this.done.bind(this)
    }

    toggle(){
        this.setState({
            finish: !this.state.finish
        })
    }

    done(){
        let { doDoneList } = this.props
        doDoneList(this.props.text)
        let { doDeleteList } = this.props
        // doDeleteList()
        // console.log(this.props.TodoItem.map)
    }
    
    render(){

        let { text } = this.props
        let { newDone } = this.state

        return(
            <li>
                <input
                    type = "checkbox"
                    value = { this.state.finish }
                    onClick = { this.toggle }
                    
                />
                { this.state.finish ? "Doing : " + text : "New To do : " + text }
                <button onClick = { this.done }>DONE</button>
            </li>
        )
    }
}

export default Item