import React, { useEffect, useState } from 'react'

const CleanUpFunction = () => {
  const [count, setCount] = useState(0)

  // change the content on return div to see the difference


  // without clean up
  useEffect(() => {
    console.log('without cleanup', count);

    setInterval(() => {
      setCount(prev => prev + 1)
    }, 1000);
  }, [count])

  // with cleanup
  // useEffect(() => {
  //   console.log('with cleanup', count);

  //   const interval = setInterval(() => {
  //     setCount(prev => prev + 1)
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [count])

  return (
    <div>{count} times</div>
  )
}

export default CleanUpFunction