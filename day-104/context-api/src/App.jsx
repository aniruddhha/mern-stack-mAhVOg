import { useState } from "react"

import { CarContext } from "./CarContext"
import { CarNew } from "./CarNew"

function App() {

  const [st, setSt] = useState({ 
    isIgnited: false,
    isLightOn: true,
    color: 'dark'
  })

  return (
    <>
      {/* <Car isIgnited={st.isIgnited} isLightOn={st.isLightOn} color={st.color}/> */}

      <CarContext.Provider value={{ st, setSt }}>
        <CarNew> </CarNew>
      </CarContext.Provider>
    </>
  )
}

export default App
