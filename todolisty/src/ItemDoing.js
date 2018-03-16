import React, { Component } from 'react'

class ItemDoing extends Component{

    constructor(props){
        super(props)
        this.done = this.done.bind(this)
    }

    done(){
        let { doDoneList } = this.props
        doDoneList(this.props.textDoing)
        console.log(this.props.itemsDoing)
        let { doDeleteListDoing } = this.props
        doDeleteListDoing(this.props.textDoing)
        console.log(this.props.itemsDoing)
    }

    render(){
        let { textDoing } = this.props
        console.log(this.context)

        return(
            <div>
                { textDoing }
                <button onClick = { this.done }>DONE</button>
            </div>
        )
    }
}

export default ItemDoing