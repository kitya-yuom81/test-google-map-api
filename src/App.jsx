import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyMap from './MyMap.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Our Store Location</h1>
      <MyMap />
    </div>
  )
}

export default App
