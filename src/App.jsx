import { useState } from 'react'
import { Div, Principal, Tela, Teclado, Botão } from './styles'
import btn_diminuir from './assets/esquerda.png'
import btn_aumentar from './assets/direita.png'
import btn_reset from './assets/reset.png' 


function App() {
  const [count, setCount] = useState(0)

  function aumentarValor (){
    setCount(count + 1)
  }

  function diminuiValor (){
    setCount(count - 1)
  }

  function resetValor (){
    setCount(0)
  }

  return (
    <Principal>
      <Div>
        <Tela>
          <h1>{count}</h1>
        </Tela>
        <Teclado>
          <Botão><img src={btn_diminuir} height={60} onClick={diminuiValor}/></Botão>
          <Botão><img src={btn_aumentar} height={60} onClick={aumentarValor}/></Botão>
          <Botão><img src={btn_reset} height={70} onClick={resetValor}/></Botão>
        </Teclado>
      </Div>
    </Principal>
  )
}

export default App
