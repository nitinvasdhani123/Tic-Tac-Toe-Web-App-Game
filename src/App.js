import './App.css';
import { useState } from 'react'
import Swal from 'sweetalert2'

function App() {
  const [currentvalue, setcurrentvalue] = useState(Array(9).fill(null))
  const [symbol, setsymbol] = useState("X")
  const [count, setcount] = useState(0)

  const whowin = (arr) => {
    const winarray = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < winarray.length; i++) {
      const [a, b, c] = winarray[i]
      if (arr[a] !== null && (arr[a] === arr[b]) && ((arr[a] === arr[c]))) {
        Swal.fire({
          title: 'Congratulations !!!!!!',
          text: `${symbol} won the match`,
          imageUrl: 'https://www.funimada.com/assets/images/cards/big/congrats-1.gif',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
        })
        setcurrentvalue(Array(9).fill(null))
        setcount(0)
        return;
      }
    }
    setcount(count + 1)

  }

  const handlechange = (index) => {
    const copyarray = Array.from(currentvalue)
    if (copyarray[index] !== null) {
      return;
    }
    copyarray[index] = symbol;
    setcurrentvalue(copyarray)
    whowin(copyarray)
    setsymbol(symbol === "X" ? "O" : "X")
    if (count === 8) {
      Swal.fire({
        title: 'Nobody Won!!!!!!',
        text: 'Try Again..........',
        imageUrl: 'https://media0.giphy.com/media/dkuZHIQsslFfy/giphy.gif?cid=ecf05e47vtycroyntz6x0isleji9lqh19xi7zpk62g77jjwy&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
      setcurrentvalue(Array(9).fill(null))
    }
  }


  return (
    <div id='main-container'>
      <div className="Blockflex">
        <div className='block' onClick={() => {
          handlechange(0)
        }} value={currentvalue[0]}>{currentvalue[0]}</div>
        <div className='block' onClick={() => {
          handlechange(1)
        }} value={currentvalue[1]}>{currentvalue[1]}</div>
        <div className='block' onClick={() => {
          handlechange(2)
        }} value={currentvalue[2]}>{currentvalue[2]}</div>


        <div className='block' onClick={() => {
          handlechange(3)
        }} value={currentvalue[3]}>{currentvalue[3]}</div>
        <div className='block' onClick={() => {
          handlechange(4)
        }} value={currentvalue[4]}>{currentvalue[4]}</div>
        <div className='block' onClick={() => {
          handlechange(5)
        }} value={currentvalue[5]}>{currentvalue[5]}</div>


        <div className='block' onClick={() => {
          handlechange(6)
        }} value={currentvalue[6]}>{currentvalue[6]}</div>
        <div className='block' onClick={() => {
          handlechange(7)
        }} value={currentvalue[7]}>{currentvalue[7]}</div>
        <div className='block' onClick={() => {
          handlechange(8)
        }} value={currentvalue[8]}>{currentvalue[8]}</div>
      </div>
    </div>
  );
}

export default App;
