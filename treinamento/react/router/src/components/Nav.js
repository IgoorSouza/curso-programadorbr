import React from 'react'
import { nav } from '../Data'
import {Link} from 'react-router-dom'

export default function Nav() {
  return (
    <div className="nav">
      <h1><Link to="/">{nav.name}</Link></h1> 
      <ul className="nav-links">
        {nav.links.map((link, index) => { 
          return (
          <li key={index}>
           <Link to={link.link}>{link.name}</Link>
          </li>)})
        }
      </ul>
    </div>
  )
}