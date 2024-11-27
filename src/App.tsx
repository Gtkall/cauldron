import { useEffect, useRef, useState } from 'react'
import './App.css'
import Screen from './components/screen/Screen'
import { Scanner } from '@yudiel/react-qr-scanner'
import { ProgressiveText } from './components/progressiveText/ProgressiveText'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Screen></Screen>
    </>
  )
}

export default App
