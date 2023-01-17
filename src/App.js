import logo from './logo.svg';
import './App.css';
import { MainBtn, NormalBtn, SpecialBtn } from './components'
import { useState } from 'react';
import * as math from 'mathjs';

function App() {
  const [inputValue, setInputValue] = useState('')
  const [cal, setCal] = useState('')

  function clicked(val) {
    // alert(`Clicked on ${val}`)
    setCal(cal+val)
    if(val==='C'){
      setInputValue('')
      setCal('')
    }else
    if(val==='/'){
      setInputValue(inputValue+'÷')
    }else
    if(val==='*'){
      setInputValue(inputValue+'×')
    }else 
    if(val==='-'){
      setInputValue(inputValue+'−')
    }else{
      setInputValue(inputValue+val)
    }
  }

  function calculate() {
    console.warn(cal)
    const result = math.evaluate(cal)
    setInputValue(inputValue+'='+result)
  }
  return (
    <div className="background">
      <div className='calcBody'>
        <h3>Calc Calculator</h3>
        <div className='inputScreen'>
          <h5>{inputValue}</h5>
        </div>
        {/* keys */}
        <div className='keyGroup1'>
          <MainBtn keyVal="(" func={()=>clicked('(')} />
          <MainBtn keyVal=")" func={()=>clicked(')')} />
          <MainBtn keyVal="C" func={()=>clicked('C')} />
          <MainBtn keyVal="+" func={()=>clicked('+')} />
        </div>
        <div className='keyGroup2'>
          <NormalBtn keyVal="7" func={()=>clicked('7')} />
          <NormalBtn keyVal="8" func={()=>clicked('8')} />
          <NormalBtn keyVal="9" func={()=>clicked('9')} />
          <MainBtn keyVal="−" func={()=>clicked('-')} />
        </div>
        <div className='keyGroup2'>
          <NormalBtn keyVal="4" func={()=>clicked('4')} />
          <NormalBtn keyVal="5" func={()=>clicked('5')} />
          <NormalBtn keyVal="6" func={()=>clicked('6')} />
          <MainBtn keyVal="÷" func={()=>clicked('/')} />
        </div>
        <div className='keyGroup2'>
          <NormalBtn keyVal="1" func={()=>clicked('1')} />
          <NormalBtn keyVal="2" func={()=>clicked('2')} />
          <NormalBtn keyVal="3" func={()=>clicked('3')} />
          <MainBtn keyVal="×" func={()=>clicked('*')} />
        </div>
        <div className='keyGroup2'>
          <MainBtn keyVal="0" func={()=>clicked('0')} />
          <MainBtn keyVal="." func={()=>clicked('.')} />
          <SpecialBtn keyVal="=" func={()=>calculate()}/>
        </div>
      </div>
    </div>
  );
}

export default App;
