import React, { Component } from 'react'

class Item extends Component{

    constructor(props){
        super(props)
        this.state = {
            finish: false
            ,newDone: ""
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
        let { onDoneList } = this.props
        onDoneList(this.state.newDone)
        this.setState({
                newDone: ""
        })
    }

    render(){

        let { text } = this.props
        let { newDone } = this.state

        return(
            <div>
                <input
                    type = "checkbox"
                    value = { this.state.finish }
                    onClick = { this.toggle }
                />
                { this.state.finish ? "Doing : " + text : "New To do : " + text }
                <button onClick = { this.done }>DONE</button>
            </div>
        )
    }
}

export default Item