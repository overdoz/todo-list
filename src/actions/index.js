let nextTodoId = 0

// actions definieren was passiert
// action creators geben ein Objekt aus
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

//  {
//    type: 'ADD_TODO',
//    id: 0,
//    text: 'Hier könnte dein Text stehen'
//  }

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

// die 3 möglichen Filterarten
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}