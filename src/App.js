import "./App.css";
import { useState } from "react";

function App() {
 
  const btns = ['+', '-', '*', '/', 1,2,3,'C',4,5,6,'=',7,8,9,'<','', 0, '.', '']
  
  const [result, setResult] = useState('')

  const clickHandler = (event) => {
    if(event.target.name === 'C'){
      setResult('')
      return;
    }
    if(event.target.name === '='){
      setResult(eval(result).toString());
      return;
    }
    
    if(event.target.name === '<'){
      setResult(result.slice(0,-1));
      return;
    }

    setResult(prev => {
      return prev.concat(event.target.name)
    })
  }
 
  return (
    <div className="App">
     <div className="top">
       <header>
         <h1>Calculator</h1>
       </header>
        <main>
          <div className="result">
            <h1>{result}</h1></div>
          <div className="btn-group">
            {btns.map(el =>
              <div key={el}>
                <button name={el} onClick={clickHandler}>{el}</button>
                </div>
              )}
          </div>
        </main>
     </div>
     <footer>
      <p>Copyright &copy; 2022 Calculator, All rights reserved.</p>
     </footer>
    </div>
  );
}

export default App;
