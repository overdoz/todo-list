import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App'


// der Store bringt alles zusammen
// hier wird der aktuelle State der App gespeichert
// über getState() lässt sich darauf zugreifen
// der store lässt sich updaten mit dispatch(action)

const store = createStore(rootReducer)
// mit createStore lässt sich unsere index.js (rootReducer) datei zum store umwandeln
setInterval(console.log(store.getState()), 2000) 
set

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)