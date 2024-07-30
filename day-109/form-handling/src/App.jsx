import { useState } from 'react'

function App() {

  const [validation, setValidation] = useState({
    isUserValid: false,
    isPasswordValid: false
  })
  const [user, setUser] = useState({
    userName: '',
    password: ''
  })

  const handleUsNmChange = (e) => {
    const { name, value } = e.target
    console.log(`User Name Changed `)

    setUser({ ...user, userName: value })
    applyValidation()
  }
  
  const handlePassChange = (e) => {
    const { name, value } = e.target
    console.log(`Password Changed`)
    setUser({ ...user, password: value })
    applyValidation()
  }

  const applyValidation = () => {
    console.log(`UsNm ${user.userName.length}`)
    console.log(`Pass ${user.password.length}`)

    if(user.userName.length > 4) {
      setValidation({ ...validation, isUserValid: true })
    } else {
      setValidation({ ...validation, isUserValid: false })
    }

    if(user.password.length > 4) {
      setValidation({ ...validation, isPasswordValid: true })
    } else {
      setValidation({ ...validation, isPasswordValid: false })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    applyValidation()

    if( validation.isUserValid && validation.isPasswordValid)
      console.log(user)
  }

  return (
    <form onSubmit={handleSubmit}>
      {JSON.stringify(validation)}
      <div>
        <label> 
          Username 
          <input 
            name="userName" 
            type="text" 
            placeholder='Username' 
            value={user.userName} 
            onChange={handleUsNmChange}/>
        </label>
        { !validation.isUserValid && <label style={{color: 'red'}}>Username is Mandetory</label>}
      </div>
      <div>
        <label> 
          Password 
          <input 
            name="password" 
            type="password" 
            placeholder='Password' 
            value={user.password} 
            onChange={handlePassChange}/>
            { !validation.isPasswordValid && <label style={{color: 'red'}}>Password is Mandetory</label> }
        </label>
      </div>
      <div>
        <input type="submit" value="Login" />
      </div>
    </form>
  )
}

export default App
