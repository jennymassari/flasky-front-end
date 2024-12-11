// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import CatList from './components/CatList';

const DATA = [
  {
    name: 'Ubik',
    caretaker: 'Maria',
    color: 'grey',
    personality: 'wild child',
  },
  {
    name: 'Pepper',
    caretaker: 'Mark',
    color: 'black',
    personality: 'spicy',
  },
  {
    name: 'Binx',
    caretaker: 'Susan',
    color: 'tuxedo',
    personality: 'feral',
  },
  ];

function App() {

  return (
    <>
      <main>
        <h1> The Cat Corral </h1>
        <CatList catData={DATA}/>
      
      </main>
    </>
  );
}

export default App;

{/* <div>
<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
  <img src={viteLogo} className="logo" alt="Vite logo" />
</a>
<a href="https://react.dev" target="_blank" rel="noreferrer">
  <img src={reactLogo} className="logo react" alt="React logo" />
</a>
</div>
<h1>Vite + React</h1>
<div className="card">
<button onClick={() => setCount((count) => count + 1)}>
  count is {count}
</button>
<p>
  Edit <code>src/App.jsx</code> and save to test HMR
</p>
</div>
<p className="read-the-docs">
Click on the Vite and React logos to learn more
</p> */}