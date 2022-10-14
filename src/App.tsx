import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState<number>(0)

  function generateNumber(): void {
    let randomNumber: number = Math.floor(Math.random() * 200) + 1;
    setCount(randomNumber)
  }

  const DisplayResult = ({ count }: { count: number }): JSX.Element => {
    if ((count % 5 === 0) && (count % 3 === 0)) {
      return <div>FizzBuzz</div>
    }
    if (count % 5 === 0) {
      return <div>Buzz</div>
    }
    if (count % 3 === 0) {
      return <div>Fizz</div>
    }
    return (
      <div>{count}</div>
    )
  }

  return (
    <div className="App">
      <button onClick={() => generateNumber()}>
        Générer un nombre : {count}
      </button>
      <DisplayResult count={count} />
    </div>
  )
}

export default App
