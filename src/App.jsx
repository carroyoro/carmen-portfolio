import React from 'react'
import { gsap } from 'gsap'

function App() {
  React.useEffect(() => {
    gsap.fromTo("#hello", { opacity: 0 }, { opacity: 1, duration: 2 })
  }, [])

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-pink-500 to-purple-600">
      <h1 id="hello" className="text-white text-4xl font-bold">¡Hola, soy Carmen!</h1>
    </div>
  )
}

export default App
