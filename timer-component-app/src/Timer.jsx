import { useState,useEffect} from "react";

function Timer(){
    const [currentTime, setCurrentTime] = useState(Date.now());

useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(`this code runs every 1 second`, Date.now())
      setCurrentTime(Date.now())
    }, 1000)
  
    
      const cleanupFunction = () => {
      clearInterval(intervalId);
    };
    return cleanupFunction;
    
  }, [])
  return (
    <div>
        <p>Current Time: {new Date(currentTime).toLocaleTimeString()}</p>
    </div>
  )
} 
  export default Timer; 