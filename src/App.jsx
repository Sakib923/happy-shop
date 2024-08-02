import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import { Outlet } from 'react-router-dom'
import NavItem from './components/NavBar/NavItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavItem />
        <Outlet />
    </>
  )
}

export default App
