import React from 'react'
import Card from './Card'
import { useDispatch } from 'react-redux'
import { deleteItem, changeDone } from '../actions/listAction'

function DoneImg(props) {
  if (props.done) {
    return(<img src="./assets/done.png" alt="Done"></img>)
  } else {
    return(<img src="./assets/notdone.png" alt="Not done"></img>)
  }
}

function ListItem(props) {
  const dispatch = useDispatch()
  return (
    <li key={props.item.id}>
      <Card className={props.item.done ? "done item" : "item"}>
        {props.item.text}
        <div>
          <button onClick={() => { dispatch(changeDone(props.item.id)) }}>
            <DoneImg done={props.item.done}></DoneImg>
          </button>
            
          <button onClick={() => { dispatch(deleteItem(props.item.id)) }}>
            <img src="./assets/bin.png" alt="Delete"></img>
          </button>
        </div>
      </Card>
    </li>
  )
}

export default ListItem