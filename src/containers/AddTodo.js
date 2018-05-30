import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'


const AddTodo = ({ dispatch }) => {
  let input
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          // addTodo action wird abgeschickt
          //  {
          //    type: 'ADD_TODO',
          //    id: 0,
          //    text: INPUT.VALUE
          //  }
          
          input.value = ''
        }}
      >
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
export default connect()(AddTodo)
// connect() ist die Verbindung zum Redux Store