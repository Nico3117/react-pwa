import React from 'react';
import logo from './logo.svg';
import './App.css';

const Test = ({title}) => {
  return (
    <h1>{title}</h1>
  )
}

let Boolean = true;

function App() {
  
  const Kaiser = ["1", "2", "3"]

  const Chewye = Boolean ? <span>True</span> : <span>False</span>
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Test title="Nico"></Test>
        {
          Boolean && <span>Test if</span>
        }
        {
          Kaiser.map((element, i) => {
            return <span key={i}>{element}</span>
          })
        }
        {Chewye}
      </header>
    </div>
  );
}

// export default App;
export {Test, App}