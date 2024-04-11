import React, { useEffect, useMemo, useState } from 'react'

const NonPrimitiveDependency = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState({
    name: ""
  })

  // runs on initial and every time the buttons is clicked
  // irrespective of if the button is clicked without changing the user name
  // because object and arrays are compared with its reference not with its value
  // so it stucks and runs every time
  useEffect(() => {
    console.log('User is updated with:', user.name);
  }, [user])



  // to overcome this type of unnecessary re-renders we can use either useMemo or useCallback
  // but make sure that the dependency is exact key not entire object / array
  const optUser = useMemo(() => ({
    name: user.name
  }), [user.name]) 

  useEffect(() => {
    console.log('Opt user is updated with:', optUser);
  }, [optUser])

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setUser((prev) => ({ ...prev, name }))} >Update User</button>
    </div>
  )
}

export default NonPrimitiveDependency