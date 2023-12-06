import React from 'react'
import { useParams } from 'react-router-dom'
import { aulas } from '../Data'

export default function Aula() {
  const id = useParams().id

  return (
    <div className="page">
      <h1>{aulas[id].title}</h1>
      <h3>{aulas[id].desc}</h3>
    </div>)
}