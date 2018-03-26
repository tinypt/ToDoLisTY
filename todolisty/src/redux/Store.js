import { createStore } from 'redux'
import App from './reducers'

function todos ( state = [], action ){
    switch ( action.type ){
        case 'ADD_TODO':
            return state.items
        case 'ADD_DOING':
            return state.itemsDoing   //.concat([ action ])
        case 'ADD_DONE':
            return state.itemsDone    //.concat([ action ])
        case 'NEWTODO':
            return state.newTodo = ""
        default:
            return state
    }
}

let store = createStore( todos )

store.dispatch({
    props: this.items,
    type: 'ADD_TODO'
})

store.dispatch({
    props: this.itemsDoing,
    type: 'ADD_DOING'
})

store.dispatch({
    props: this.itemsDone,
    type: 'ADD_DONE'
})

store.dispatch({
    props: this.newTodo,
    type: 'NEWTODO'
})

console.log(store.getState())