import React from 'react'
import ReactDOM from 'react-dom/client'

const Simple = () => <h1 style={{border : '1px solid red'}}> Hey Hi</h1>

function Normal() {
    return  <h1 style={{border : '1px solid red'}}> Hey Hi</h1>
}

const div = document.getElementById('root')
ReactDOM.createRoot(div)
        .render( <Normal/> )

