import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Card/>
    </div>
  )
}

export default App
