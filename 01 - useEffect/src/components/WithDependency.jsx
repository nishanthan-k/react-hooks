import React, { useEffect, useState } from 'react'

const WithDependency = () => {
  const [count, setCount] = useState(0)


  // runs only one time on initial render
  useEffect(() => {
    console.count("With Empty Dependency");

    return () => {
      console.count("With Empty cleaned up.");
    }
  }, [])

  // runs on initial render and every time when count changes
  useEffect(() => {
    console.count("With Count as a Dependency");

    return () => {
      console.count("With Count cleaned up.");
    }
  }, [count])

  return (
    <div>
      <h2>With Dependency</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)} >Increment</button>
      <button onClick={() => setCount(prev => prev - 1)} >Decrement</button>
    </div>
  )
}

export default WithDependency