import React, { useEffect, useState } from 'react';
import {Navbar, CenterImage, InfoBelow} from './components'
import './App.css';

function App() {
  const [NewHeader, setNewHeader] = useState(true)
  useEffect(() => {
    const scrollListiner = () =>{
      if(window.scrollY <= 150){
        setNewHeader(true)
      } else {
        setNewHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListiner);
    return() => {
      window.addEventListener('scroll', scrollListiner);
    }
  }, [])
  return (
    <div className="App">
      <Navbar show={NewHeader}/>
      <CenterImage/>
      <InfoBelow/>
    </div>
  );
}

export default App;
