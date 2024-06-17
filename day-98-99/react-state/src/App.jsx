import { useState } from "react"


function Details({ amt } ) {
 
  const [amount, setAmount] = useState(0)
  return <></>
} 

function App() {

  const [cnt, setCnt] = useState(0)
  const [cnt1, setCnt1] = useState(0)

  const [filter, setFilter] = useState({
    mobile: '',
    billNo: '',
    amount: 0,
    date: '',
    counter: 1,
    cashier: ''
  })

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
