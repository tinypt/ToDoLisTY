import actionApp from '../actions/actionApp'

const deleteList = (state = [], action) => {
    switch (action.type) {
      case 'DELETE_TODO':
        return [
          ...state,
          {
            text: action.text,
            id: state.items.indexOf(this.text),
            state: state.items.splice(this.id,1)
          }
        ]
      case 'DELETE_DOING':
        return [
          ...state,
          {
            text: action.text,
            id: state.itemsDoing.indexOf(this.text),
            state: state.itemsDoing.splice(this.id,1)
          }
        ]
      default:
        return state
    }
  }
   
  export default deleteList