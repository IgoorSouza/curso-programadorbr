import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Aulas from './components/Aulas'
import Aula from './components/Aula'
import Sobre from './components/Sobre'
import Assistir from './components/Assistir'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
      <Router>
        <div className="App">
          <Nav/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route exact path="/aulas/:id" element={<Aula/>}/>
            <Route path="/aulas" element={<Aulas/>}></Route>
            <Route path="/sobre" element={<Sobre/>} />
            <Route path="/assistir" element={<Assistir/>} />
            <Route path="*" element={
              <div className="page">Essa rota não existe</div>
            }/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;