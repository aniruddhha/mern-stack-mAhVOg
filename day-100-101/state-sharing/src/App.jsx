import { useState } from "react"

function Mobile({ isCountryChecked, isMobileChecked, setMobile }) {
  // const [isMobileChecked, setMobile] = useState(false)

  return (
    <div>
      <h1> Mobile Component</h1>
      <label> Country {isCountryChecked ? 'Checked' : 'Unchecked'}</label>
      <label> Mobile {isMobileChecked ? 'Checked' : 'Unchecked'}</label>
      <input type="checkbox" checked={isMobileChecked} onChange={() => setMobile(!isMobileChecked)} />
    </div>
  )
}

function Country({ isCountryChecked, isMobileChecked, setCountry }) {
  // const [isCountryChecked, setCountry] = useState(false)

  return (
    <div>
      <h1> Country Component</h1>
      <label> Country {isCountryChecked ? 'Checked' : 'Unchecked'}</label>
      <label> Mobile {isMobileChecked ? 'Checked' : 'Unchecked'}</label>
      <input type="checkbox" checked={isCountryChecked} onChange={() => setCountry(!isCountryChecked)} />
    </div>
  )
}

function App() {

  // const [isMobileChecked, setMobile] = useState(false)
  // const [isCountryChecked, setCountry] = useState(false)

  const [box, setBox] = useState({ isMobileChecked: false, isCountryChecked: false })

  const setMobile = (mobile) => setBox(ps => ({ ...ps, isMobileChecked: mobile }))
  const setCountry = (country) => setBox(ps => ({ ...ps, isCountryChecked: country }))

  return (
    <>

      <Mobile  {...box} setMobile={setMobile} />

      <Country {...box} setCountry={setCountry} />
    </>
  )
}

export default App
