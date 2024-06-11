

function Details({ btnText, onBtnClick }) {

  const handleClick = () => {
    console.log(`Button CLiceked ${btnText}`)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center' }} onClick={handleClick}>
      <input type="button" value="Okay" onClick={onBtnClick}/>
      <input type="button" value="Okay" onClick={(e) => { 
         e.stopPropagation();
        console.log(`Button CLicked`) 
      }}/>
    </div>
  )
}


function App() {

  const handleClick = (e) => {
    e.stopPropagation();
    console.log(`App -> Button CLiceked`)
  }

  return <Details btnText={'Okay'} onBtnClick={handleClick}></Details>
}

export default App
