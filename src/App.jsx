import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import AlertBox from './components/AlertBox'

function App() {
  let [box,setBox] = useState(false)

  const buttonHandler = () =>(
    setBox(true)
  )

  const removeBox = () => (
    setBox(false)
  )

  return (
    <>
      <div>Hello World</div>
      {box && <AlertBox click={removeBox}/>}
      <Button click={buttonHandler}/>
    </>
  )
}

export default App
