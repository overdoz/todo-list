// Unterliste "todos" von State
// todos ist hier ein Array
// todos ist ein data state - wichtig: von UI state trennen
// z.B. this.state.todos = [1, 2, 3]

// jeder state hat seine eigenen methoden ->
// jede state Aufgabe lässt sich untergliedern
// state wird nicht verändert sondern kopiert und bearbeitet

const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':

        // Action creators 
        // returnt ein Array mit dem alten Array und einem neuen Objekt
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      case 'TOGGLE_TODO':
        return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
            // wenn id übereinstimmt dann return ein neues Todo Element mit completed
        )
      default:
        return state
    }
  }
  
  export default todos