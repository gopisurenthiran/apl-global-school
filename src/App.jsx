import { useState } from 'react'
import Header  from './components/Header'  
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      {/* Main Content */}
      <main className="p-4">
        {/* ... */}
      </main>
      <Footer/>
      {/* Footer */}
    </>
  )
}

export default App
