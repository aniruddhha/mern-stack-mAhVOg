import { forwardRef, useRef, useState } from 'react'



// A component can specify that it “forwards” its ref to one of its children.
const DomManipulation = forwardRef((props, ref) => {

  // const ipRf = useRef(null)

  // const handleClick = () => {
  //   ipRf.current.focus()
  // }

  return (
    <>
      <input type="text" placeholder='Hi' ref={ref}/>
      {/* <input type='button' value="Okay" onClick={handleClick}/> */}
    </>
  )
})


function App() {
  const [count, setCount] = useState(0)
  const ref = useRef(0)
  const cstRf = useRef(null)

  const handleClick = () => {
    cstRf.current.focus()
  }

  console.log(`Rerendered ${count}`) // bad approach -> side effect

  return (
    <>
    <h1>Count: State : {count}</h1>
    <h1>Count: Ref:  {ref.current}</h1>
     <button type="button" onClick={ () => setCount(count + 1) }>Okay : State</button>
     <button type="button" onClick={ () => (ref.current = ref.current + 1)}>Okay: Ref</button>
     <div>
      <DomManipulation ref={cstRf}/>
      <button type="button" onClick={ () => handleClick() }>Handle Ref</button>
     </div>
    </>
  )
}

export default App
