import React, {useState} from 'react';
import './App.css'
import Submit from './Component/Submit.js';
import Button from './Component/Button.js';
import Image from './Component/Star.js';
import Text from './Component/Text.js';
import ThankYou_image from './Component/ThankYou_image'



function App() {
  
  const [display, setDisplay] = useState(true)
  const [star, setStar] = useState(0)


  const handleClick = () => {
    setDisplay(!display)
  }


  return (
    <div className="App">
      
      {display ?
        <form className="card" >
          <Image />
          
          <Text />  

          <div className='rate_button'>
            <Button text="1" action={()=> setStar(1)} />
            <Button text="2" action={()=> setStar(2)} />
            <Button text="3" action={()=> setStar(3)} />
            <Button text="4" action={()=> setStar(4)} />
            <Button text="5" action={()=> setStar(5)} />
          </div>
          
          <Submit text={"SUBMIT"} action={handleClick} />
        
        </form>

        : 

        <form className='card card2'>
          <>
            <ThankYou_image />
            
            <div className='submit'>
              <p> You selected {star} out of 5</p>
            </div>
          
            
            <h1 className='thankyou'>Thank you!</h1>

            <p className='thankyou'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch! </p>
          </>
              
        </form>
      }
    </div>
  );


}



export default App;

