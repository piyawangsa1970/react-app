import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [content , setContent] = useState('')
  const fetchApi=async()=>{
    const response = await fetch("https://express-api-server-gamma.vercel.app/json")
    const json = await response.json()
    if(!response.ok){
      setContent("error fetch")
    }else{
      setContent(json)
    }
    console.log(json)

  }
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <button onClick={fetchApi}>fetch</button><br/>
      <div>{content.message}</div>
      
    </>
  )
}

export default App
