import { useState } from "react"

function MyCounter() {
  const [cnt, setCnt] = useState(0)

  return (
    <div style={{ display: 'flex', justifyContent:'center', flexDirection:'column', alignItems:'center' }}>
      <h3>{cnt}</h3>
      <input type="button" value="Okay" onClick={ ()=> setCnt(ps => ps + 1) } />
    </div>
  )
}



function App() {

  return (
    <>
      <MyCounter/>

      <MyCounter/>
    </>
  )
}



export default App
