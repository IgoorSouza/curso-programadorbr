import React from 'react'
import Card from './Card'

function Modal(props) {
  function hideModal(event) {
    let target = event.target
    if (target.id === "modal") {
      props.onHideModal()
    }
  }

  return (
  <div className={props.show ? "modal" : "modal hide"} onClick={hideModal} id="modal">
    <Card className="cardModal">
      {props.children} 
    </Card>
  </div>
  )
}

export default Modal