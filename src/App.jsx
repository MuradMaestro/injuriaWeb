import { useState } from 'react'
import image from "./assets/WhatsApp Image 2024-12-11 at 09.19.11.jpeg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      <img style={{}} src={image} alt="" />
      
    </div>
  )
}

export default App
