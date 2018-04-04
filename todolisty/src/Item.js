import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { doingList, deleteArray } from './redux/actions/actionApp'

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        doingList: bindActionCreators(doingList, dispatch),
        deleteArray: bindActionCreators(deleteArray, dispatch)
    }
}

class Item extends Component {

    constructor(props) {
        super(props)
        this.done = this.done.bind(this)
    }

    done() {
        this.props.doingList(this.props.text)
        this.props.deleteArray(this.props.text)
    }

    render() {
        let { text } = this.props
        console.log(this.context)

        return (
            <li>
                {text}
                <button onClick={this.done}>DOING</button>
            </li>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)