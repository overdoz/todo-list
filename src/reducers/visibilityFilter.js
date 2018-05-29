import { VisibilityFilters } from '../actions'

// UI State
// die 3 Konstanten werden importiert
// default = VisibilityFilter.SHOW_ALL
// Dieser Reducer nimmt den alten State, eine Action und gibt einen neuen State raus
// z.B. state.visibilityFilter = SHOW_ALL

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}
export default visibilityFilter