//import { useEffect, useState } from 'react'
import './App.css';
import Header from './Header'
import Counter from './Counter'

function App() {
  // const [show, setShow] = useState(true)

  // let time = 0

  // useEffect(() => {
  //   let timer = setInterval(() => {
  //     time++
  //     console.log(time)
  //     if (time >= 5) {
  //       clearInterval(timer)
  //       setShow(false)
  //     }
  //   }, 1000)
  // }, [])

  

  //if (show) {
    return (
      <div>
        <Header name="ProgBr" links={["Sobre", "Comprar", "Contato", "Login"]}></Header>
        <Counter count={0}></Counter>
      </div>
    );
  // } else {
  //   return (
  //     <div>
  //       Sem contador
  //     </div>
  //   );
  }
//}

export default App;