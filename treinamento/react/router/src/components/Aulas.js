import React, { useEffect, useState } from 'react'
import { aulas } from '../Data'
import { Link, useResolvedPath } from 'react-router-dom'

export default function Aulas() {
  const match = useResolvedPath().pathname
  const [url, setUrl] = useState("")

  useEffect(() => {
    const newUrl = match.slice(-1) === '/' ? match : match + '/'
    setUrl(newUrl)
  }, [])

  return (
    <div className="page">
      <h1>Aulas</h1>
      <ul className="aulas">
        {aulas.map(aula => {
          return (
          <li key={aula.id}>
            <Link to={`${url}${aula.id}`}> {aula.title} </Link>
          </li>)
        })}
      </ul>
    </div>
  )
}