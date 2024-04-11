import './App.css'
import CleanUpFunction from './components/CleanUpFunction'
import NoDependency from './components/NoDependency'
import NonPrimitiveDependency from './components/NonPrimitiveDependency'
import WithDependency from './components/WithDependency'

function App() {

  return (

    // remove React Strick Mode to get real renders
    <>
      {/* <NoDependency /> */}
      {/* <WithDependency /> */}
      {/* <NonPrimitiveDependency /> */}
      <CleanUpFunction />
    </>
  )
}

export default App
