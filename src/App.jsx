import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import AlertBox from './components/AlertBox'
import Heart from './components/Heart'

function App() {
  let [box,setBox] = useState(false)
  let [clicked,setClicked] = useState(false)

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
      <Heart onClick={()=> console.log('clicked')}/>
    </>
  )
}

export default App
