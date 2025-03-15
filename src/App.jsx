import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import AlertBox from './components/AlertBox'
import Heart from './components/Heart'
import ExpendableText from './components/ExpendableText'

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
      <ExpendableText maxChar = {50}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Sapiente nulla labore vel magni totam voluptatem sit ducimus temporibus neque 
        maiores excepturi ad impedit similique exercitationem dignissimos, tempora alias 
        praesentium at! Quibusdam similique error nesciunt maxime aliquid consequuntur accusamus 
        sapiente a, ut, laudantium ab, commodi beatae iusto reiciendis voluptas voluptatem? 
        Dignissimos harum saepe, enim fuga placeat porro quidem maxime explicabo facere quibusdam
         eum neque, exercitationem, quisquam ipsum ab excepturi hic nam non perferendis officiis 
         veritatis corrupti cumque cupiditate! Cum quam nisi voluptatum, nam quae, totam, doloribus 
         neque quidem et sequi non? Facere, recusandae quod nesciunt, dolorem provident voluptatem 
         tempora omnis rem non iste illum molestias sunt magni unde, eveniet est? Magnam corrupti 
         eligendi tempore facilis exercitationem minus ipsa earum. Labore perferendis vero minus 
         soluta, ipsam dolorem maiores quod fugit qui. Nemo, aut a! Dolorum dolores tempore eius 
         doloribus beatae! Dolor nihil, cum aliquam iure non quis omnis necessitatibus provident?
        Sint ut possimus iusto et accusantium, eum nostrum quia cumque? Omnis consequatur fuga 
        laboriosam obcaecati delectus molestias laudantium, molestiae odio deserunt similique, 
        dicta quas fugit sit quaerat expedita quo vitae fugiat commodi nobis neque temporibus! 
        Cumque minima atque cum fugit dicta. Saepe sapiente, similique soluta voluptatem possimus 
        reiciendis atque facilis distinctio pariatur?
      </ExpendableText>
    </>
  )
}

export default App
