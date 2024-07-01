import { useRef, useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const ref = useRef(0)

  console.log(`Rerendered ${count}`) // bad approach -> side effect

  return (
    <>
    <h1>Count: State : {count}</h1>
    <h1>Count: Ref:  {ref.current}</h1>
     <button type="button" onClick={ () => setCount(count + 1) }>Okay : State</button>
     <button type="button" onClick={ () => (ref.current = ref.current + 1)}>Okay: Ref</button>
    </>
  )
}

export default App
