import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Item from './Item'

const mapStateToProps = state => {
    return {
        TodoItem: state.items
    }
}

class TodoList extends Component {

    render() {

        let { TodoItem } = this.props

        return (
            <div id="Topic">To do
                <ul>
                    {TodoItem && TodoItem.map((todo, index) => <Item items={TodoItem} text={todo} key={`todo-${index}`} />)}
                </ul>
            </div>
        )
    }
}

export default connect(mapStateToProps)(TodoList)