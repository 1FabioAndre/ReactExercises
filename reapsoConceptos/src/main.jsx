import React from 'react'
import ReactDOM from 'react-dom/client'
import ContadorSinMemoria from './components/ContadorSinMemoria.jsx'
import ContadorConMemoria from './components/ContadorConMemoria.jsx'
import PadreContador from './components/compartirEstado/PadreContador.jsx'
import PadreContadorV2 from './components/compartirEstadoV2/PadreContadorV2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContadorSinMemoria></ContadorSinMemoria>
    <ContadorConMemoria></ContadorConMemoria>
    <PadreContador></PadreContador>
    <PadreContadorV2></PadreContadorV2>
  </React.StrictMode>
)
