import { useState , useEffect} from 'react'
import React from 'react';



function App() {
  const [count, setCount] = useState(0)
  

 
  useEffect(() => {
    console.log("callback function inside useEffect is called")
    document.title = `count is ${count}`
  }, [count])

 

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>INCREASE COUNT</button>
     
      
    </div>
  )
}
export default App;