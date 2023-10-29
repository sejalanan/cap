import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timerId;

    const updateCount = () => {
      setCount(count + 1);
    };

    if (running) {
      timerId = setTimeout(updateCount, 1000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [count,running]);

  const toggleTimer = () => {
    setRunning(!running);
  };

  return (
    <div>
      <h1>Timer Count: {count}</h1>
      <button onClick={toggleTimer}>
        {running ? 'Stop Timer' : 'Start Timer'}
      </button>
    </div>
  );
}

export default Timer;
