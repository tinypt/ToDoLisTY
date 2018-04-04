import { filter } from 'lodash'

const initState = {
  items: [],
  itemsDoing: [],
  itemsDone: []
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        items: [
          ...state.items,
          action.text
        ]
      }
    case 'ADD_DOING':
      return {
        ...state,
        itemsDoing: [
          ...state.itemsDoing,
          action.text
        ]
      }
    case 'ADD_DONE':
      return {
        ...state,
        itemsDone: [
          ...state.itemsDone,
          action.text
        ]
      }
    case 'DELETE_TODO':
      return {
        ...state,
        items: [...filter(state.items, item => item !== action.text)]
      }
    case 'DELETE_DOING':
      return {
        ...state,
        itemsDoing: [...filter(state.itemsDoing, item => item !== action.text)]
      }
    default:
      return state
  }
}

export default reducer