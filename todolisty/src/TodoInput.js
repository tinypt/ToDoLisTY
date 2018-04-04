import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addList } from './redux/actions/actionApp'
import './TodoStyle.css'

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        addList: bindActionCreators(addList, dispatch)
    }
}

class TodoInput extends Component {

    constructor(props) {
        super(props)
        this.state = {
            newTodo: ""
        }
        this.addClicked = this.addClicked.bind(this)
    }

    addClicked() {
        this.props.addList(this.state.newTodo)
        this.setState({
            newTodo: ""
        })
    }

    render() {

        let { newTodo } = this.state

        return (
            <div >
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => this.setState({ newTodo: e.target.value })}
                />
                <button onClick={this.addClicked}>ADD</button>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput)