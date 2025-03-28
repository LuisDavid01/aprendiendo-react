import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const TURNS = {
  X: 'x',
  O: 'o'
}


const Square = ({children, isSelected ,updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''} `
  return(
    <div className={className}>
      {children}
    </div>
  )
}
function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurns] = useState(TURNS.X)

  const updateBoard = () => {
    //to do actualizar el juego con un click
  }
  return (
    <main className='board'>
      <h1>tic tac toe</h1>
      <section className='game'>
        {board.map((_, index) =>{
          return(
            <Square key={index} index={index}> 
              {board[index]}
            </Square>

          )
        })
        
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    </main>
  )
}

export default App
