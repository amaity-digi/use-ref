
import { useRef } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  const persistRef = useRef(null);
  const changeHandleRef=useRef(null);

  // useCase of useRef to store & persist value in between render
  useEffect(()=>{
    persistRef.current += 1;
  });

  const handleClick =()=>{
    changeHandleRef.current.style.color='Blue';
  }
  
  //Most asked javaScript console statement 
   console.log("9" > "1"); // when two number in string that time letter by latter takes place means 9 is greater than 1, it's true.
   console.log("" > 1);  // Empty string will convert to 0, 0 is greater than 1, it' false.
   console.log("1"> 7);  // when string number is comapare with number, that time string number took as a number, so it's false. 
   console.log("ashis" > 1); // false

   
   
  return (
    <div className="App">
     <h2>One great useCases of useRef</h2>
 
  <h2 ref={changeHandleRef}>Hello Brother</h2>
  <h3 className='color' onClick={handleClick}>click here to change the color</h3>
    
    </div>
  );
}

export default App;
