import React, { useEffect, useState } from 'react'

const NoDependency = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.count("No Dependency useEffect runs");

    return () => {
      console.count("useEffect cleaned up.");
    }
  })

  return (
    <div>
      <h2>No Dependency</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)} >Increment</button>
      <button onClick={() => setCount(prev => prev - 1)} >Decrement</button>
    </div>
  )
}

export default NoDependency