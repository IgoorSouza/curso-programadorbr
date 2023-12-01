import React from 'react'
import Card from './Card'

function DoneImg(props) {
  if (props.done) {
    return(<img src="./assets/done.png" alt="Done"></img>)
  } else {
    return(<img src="./assets/notdone.png" alt="Not done"></img>)
  }
}

function ListItem(props) {
  return (
    <li key={props.item.id}>
      <Card className={props.item.done ? "done item" :"item"}>
        {props.item.text}
        <div>
          <button onClick={() => {props.onDone(props.item)}}>
            <DoneImg done={props.item.done}></DoneImg>
          </button>
            
          <button onClick={() => {props.onItemDeleted(props.item)}}>
            <img src="./assets/bin.png" alt="Delete"></img>
          </button>
        </div>
      </Card>
    </li>
  )
}

export default ListItem