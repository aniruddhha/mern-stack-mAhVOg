import { useState, useEffect, useRef } from "react"


function MyVideoPlayer({ isPlaying, src }) {

  const vd = useRef(null)

  useEffect(() => {
    if(isPlaying) vd.current.play()
      else  vd.current.pause()
  })

  return(
    <video src={src} ref={vd}/>
  )
}


let a  = 10

function App({ abc }) {

  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    a = 90
    console.log(`This is side effect`)
  })
 
  // ----- side effects -----
  // sever
  // enter chat room
  // connect to fb
   // ----- side effects -----

  return (
    <>
    <div>
      <input type="button" value={isPlaying ? 'PAUSE' : 'PLAY'} onClick={ () => setIsPlaying(!isPlaying) } />
    </div>
      <MyVideoPlayer isPlaying={isPlaying} src={'https://www.w3schools.com/html/mov_bbb.mp4'} />
    </>
  )
}

export default App
