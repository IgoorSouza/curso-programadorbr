import React from 'react'
import { useLocation } from 'react-router-dom'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export default function Assistir() {
  const query = useQuery()
  const videoLink = query.get("video")

  return (
    <div className="page">
      <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoLink}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}