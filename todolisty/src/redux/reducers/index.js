import { combineReducers } from 'redux'
import add from './add'
import deleteList from './delete'
// import clicked from './clicked'

export default combineReducers({
  add,
  deleteList
})