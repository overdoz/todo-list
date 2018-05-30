import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
  visibilityFilter
})

// reducers updaten die states
// kombiniert beide States
// z.B. this.state = {
//  todos: []
//  visibilityFilter = SHOW_ALL
//}