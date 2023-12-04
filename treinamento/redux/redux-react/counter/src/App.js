import React from 'react'
import './App.css';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import Contador from './components/Contador'
import Cabecalho from './components/Cabecalho'
import contadorReducer from './reducers/contadorReducer';

function App() {
  const allReducers = combineReducers({counter: contadorReducer})
  const store = createStore(allReducers)

  return (
    <div className="App">
      <Provider store={store}>
        <Cabecalho></Cabecalho>
        <Contador></Contador>
      </Provider>
    </div>
  );
}

export default App;