import { useState } from 'react'

import './App.css'
import Timer from './Timer'

function App (){
  const [showComponent,setShowComponent]= useState(true)
  return (
    <>
  <button onClick={()=> setShowComponent(!showComponent)}>{showComponent ? 'Hide': 'Show'} Timer</button>
  {showComponent ? <Timer /> : null}
  </>
  )
}
export default App