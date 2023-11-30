import React from 'react'
import './App.css'

function Header(props) {
  return(
    <header className="header">
      <h1>{props.name}</h1>
      <Menu links={props.links}></Menu>
    </header>
  )
}

function Menu(props) {
  const listLinks = props.links.map((link, index)=><li key={index}><a href="">{link}</a></li>)

  return (
  <ul className="menu">
    {listLinks}
  </ul>)
}

export default Header