import React, { Component } from 'react'
import { connect } from 'react-redux'

import Item from './ItemDoing'

const mapStateToProps = state => {
    return {
        ItemDoing: state.itemsDoing
    }
}

class Doing extends Component {

    render() {

        let { ItemDoing } = this.props

        return (
            <div id="Topic">DOING..
                <ul>
                    {ItemDoing && ItemDoing.map((doingNow, index) => <li> <Item itemsDoing={ItemDoing} textDoing={doingNow} key={`doing-${index}`} /> </li>)}
                </ul>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Doing)