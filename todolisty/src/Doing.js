import React, { Component} from 'react'

import Item from './ItemDoing'

class Doing extends Component{

    render(){

        let { ItemDoing } = this.props

        return(
            <div id = "Topic">DOING..
                <ul>
                    { ItemDoing.map (doingNow => <li> <Item itemsDoing = { ItemDoing } textDoing = { doingNow } doDoneList = { this.props.doneList } doDeleteList = { this.props.doDeleteList } /> </li>) }
                </ul>
            </div>
        )
    }
}

export default Doing