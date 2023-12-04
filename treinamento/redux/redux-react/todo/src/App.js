import React, { useState } from 'react'
import './todo.css'
import TodoForm from './components/TodoForm'
import List from './components/List'
import Modal from './components/Modal'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import listReducer from './reducers/listReducer'
import persistState from './stateManagers/persistState'
import loadState from './stateManagers/loadState'

const store = createStore(listReducer, loadState())
store.subscribe(() => {
  persistState(store.getState())
})

function App() {
  const [showModal, setShowModal] = useState(false)

  function onHideModal(event) {
      setShowModal(false)
  }

  return(
    <Provider store={store}>
      <div className="container">
        <header className="header">
          <h1>Todo</h1>
          <button className="addButton" onClick={() => {setShowModal(true)}}>+</button>
        </header>

        <List></List>
        <Modal show={showModal} onHideModal={onHideModal}>
          <TodoForm onHideModal={onHideModal}></TodoForm>
        </Modal>
      </div>
    </Provider>
  )
}

export default App