import { useState } from "react"


function App() {

  const [cnt, setCnt] = useState(0)

  console.log(`Called App`)

  const handleClick = () => {

    setCnt(cnt + 1)
    console.log(cnt)
  }


  return (
    <div style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
        <h1>Count: {cnt}</h1>
        <input type="button" value="Okay" onClick={ handleClick }/>
    </div>
  )
}

export default App
