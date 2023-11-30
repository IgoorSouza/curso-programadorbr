import React from 'react'

function DoneImg(props) {
  if (props.done) {
    return(<img src="./assets/done.png" alt="Done"></img>)
  } else {
    return(<img src="./assets/notdone.png" alt="Not done"></img>)
  }
}

function List(props) {
  return (
    <ul>
      {props.items.map(item =>
        <li className={item.done ? "done" :""} key={item.id}>
          {item.text}
          <button onClick={() => {props.onDone(item)}}><DoneImg done={item.done}></DoneImg></button>
          <button onClick={() => {props.onItemDeleted(item)}}>
            <img src="./assets/bin.png" alt="Delete"></img>
          </button>
        </li>
      )}
    </ul>
  )
}

export default List