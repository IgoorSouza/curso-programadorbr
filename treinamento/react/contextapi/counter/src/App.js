import React from 'react'
import './App.css';
import Contador from './components/Contador';
import Cabecalho from './components/Cabecalho';
import {ContadorProvider} from './components/ContadorContexto'

function App() {
  return (
    <div className="App">
      <ContadorProvider>
        <Cabecalho></Cabecalho>
        <Contador></Contador>
      </ContadorProvider>
    </div>
  );
}

export default App;