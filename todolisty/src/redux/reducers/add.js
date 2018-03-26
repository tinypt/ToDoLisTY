import actionApp from '../actions/actionApp'

const add = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            newTodo: action.text,
            state: state.items.concat([this.newTodo])
          }
        ]
      case 'ADD_DOING':
        return [
          ...state,
          {
            id: action.id,
            newDoing: action.text,
            state: state.itemsDoing.concat([this.newDoing])
          }
        ]
       case 'ADD_DONE':
        return [
          ...state,
          {
            id: action.id,
            newDone: action.text,
            state: state.itemsDone.concat([this.newDone])
          }
        ]
      default:
        return state
    }
  }
   
  export default add