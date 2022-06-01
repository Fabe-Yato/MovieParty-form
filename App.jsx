import { useState } from 'react'
import Apresentacao from './components/Apresentacao';
import Cadastro from './components/Cadastro';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="conteudo-principal">
      <Apresentacao/>
      <Cadastro/>
    </main>
  )
}

export default App
