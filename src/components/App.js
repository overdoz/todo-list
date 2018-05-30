import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App

// Warum components und container trennen? lies unten.
// https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0