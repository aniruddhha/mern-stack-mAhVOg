
function ColorBarV1(props) {

  return(
    <div>
      <p>Time: {props.time}</p>
      <p>Date: {props.date}</p>
      <p>User: {props.user}</p>
      <hr />
    </div>
  )
}

function ColorBarV2({ time, date, user }) {
  return(
    <div>
      <p>Time: {time}</p>
      <p>Date: {date}</p>
      <p>User: {user}</p>
      <hr />
    </div>
  )
}

function ColorBarV3({ time, date, user, children, st }) {
  return(
    <div>
      <p>Time: {time}</p>
      <p>Date: {date}</p>
      <p>User: {user}</p>
      {children}
      <div>
        <SimpleButton st={st}></SimpleButton>
      </div>
      <hr />
    </div>
  )
}

function SimpleButton({ st }) {
  return (
    <button style={st}>Hello</button>
  )
}


function App() {

  const dtls = { 
    time : '09:00 AM',
    date: '2022-01-01',
    user: 'Aniruddha'
  }
  const st = {
    border: '1px solid red'
  }
  
  return (
    <div>
      <ColorBarV1 time='08:00 PM' date='2020-01-01' user='Aniruddha'/>
      <ColorBarV2 time={dtls.time} date={dtls.date} user={dtls.user}/>
      <ColorBarV2 {...dtls}/>
      <ColorBarV3 {...dtls} st={st}>
        <h1> I am Header </h1>
        <h1> I am Header </h1>
      </ColorBarV3>
      
    </div>
  )
}

export default App
