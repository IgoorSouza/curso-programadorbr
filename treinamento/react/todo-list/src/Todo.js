import React, { useEffect, useState } from 'react'
import './todo.css'
import TodoForm from './components/TodoForm'
import List from './components/List'
import Item from './components/Item'
import Modal from './components/Modal'

function Todo() {
  const [items, setItems] = useState([])
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    let savedItems = JSON.parse(localStorage.getItem("savedItems"))
    
    if (savedItems && savedItems.length !== 0) {
      console.log(savedItems)
      setItems(savedItems)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("savedItems", JSON.stringify(items))
  }, [items]) 

  function onAddItem(text) {
    let it = new Item(text)

    setItems([...items, it])
    onHideModal()
  }

  function onItemDeleted(item) {
    let filteredItems = items.filter(it => it.id !== item.id)

    setItems(filteredItems)
  }

  function onDone(item) {
    let updatedItems = items.map(it => {
      if (it.id === item.id) {
        it.done = !it.done
      }
      return it
    })

    setItems(updatedItems)
  }

  function onHideModal(event) {
      setShowModal(false)
  }

  return(
    <div className="container">
      <header className="header">
        <h1>Todo</h1>
        <button className="addButton" onClick={() => {setShowModal(true)}}>+</button>
      </header>

      <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
      <Modal show={showModal} onHideModal={onHideModal}>
        <TodoForm onAddItem={onAddItem}></TodoForm>
      </Modal>
    </div>
  )
}

export default Todo