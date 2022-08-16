import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navbar } from './Components/Navbar'
import { AllRoutes } from './Components/AllRoutes'

function App() {
  const [count, setCount] = useState(0)

  return <>
    <Navbar/>
    <AllRoutes/>
  </>
}

export default App
