import React, { Component } from 'react'

class Item extends Component{

    constructor(props){
        super(props)
        this.done = this.done.bind(this)
    }

    done(){
        let { doDoingList } = this.props
        doDoingList(this.props.text)
        console.log(this.props.items)
        let { doDeleteList } = this.props
        doDeleteList(this.props.text)
        console.log(this.props.items)
    }
    
    render(){
        let { text } = this.props
        console.log(this.context)

        return(
            <li>
                { text }
                <button onClick = { this.done }>DOING</button>
            </li>
        )
    }
}

export default Item