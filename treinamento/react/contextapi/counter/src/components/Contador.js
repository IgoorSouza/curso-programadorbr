import React, { useContext } from 'react'
import {ContadorContexto} from './ContadorContexto'

function Contador() {
  const [contagem, setContagem] = useContext(ContadorContexto)

  return (
    <div>
      <div>{contagem}</div>
      <button onClick={() => {setContagem(anterior => anterior - 1)}}>-</button>
      <button onClick={() => {setContagem(anterior => anterior + 1)}}>+</button>
    </div>
  )
}

export default Contador