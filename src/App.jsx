import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contador from './Contador/Contador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div>
            <h4>Mi app con contador</h4>
          <Contador/>
      </div>
   

    </>
  )
}

export default App
