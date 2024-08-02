import { Link } from "react-router-dom";

function App() {

  return (
    <h1>
      <div>
        <Link to={'/car'}>Car</Link>
      {/* <a href='/car'>Car</a> */}
      </div>
     <div>
     <Link to={'/mobile'}>Mobile</Link>
     {/* <a href='/mobile'>Mobile</a> */}
     </div>
    </h1>
  )
}

export default App
