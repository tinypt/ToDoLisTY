import React, { Component } from 'react'
import { connect } from 'react-redux'

import ItemFininsh from './ItemFinish'

const mapStateToProps = state => {
    return {
        ItemDone: state.itemsDone
    }
}

class Finish extends Component {

    render() {

        let { ItemDone } = this.props

        return (
            <div id="Topic">DONE
                <ul>
                    {ItemDone && ItemDone.map((finished, index) => <li> <ItemFininsh itemDone={ItemDone} text2={finished} key={`done-${index}`} /> </li>)}
                </ul>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Finish)
