import React from 'react'
import { nav } from '../Data'
import {Link} from 'react-router-dom'

export default function Nav() {
  return (
    <div className="nav">
      <h1><a href="/">{nav.name}</a></h1> 
      <ul className="nav-links">
        {nav.links.map((link, index) => { 
          return (
          <li key={index}>
            <Link to={index === 0 ? "/aulas" : "sobre"}>{link}</Link>
          </li>)})
        }
      </ul>
    </div>
  )
}