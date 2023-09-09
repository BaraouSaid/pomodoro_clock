import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="container h-screen bg-slate-100 flex items-center justify-items-center">
        <div>
          <h1>25 + 5 Clock</h1>
        </div>
        <div id="break-label">Break length</div>
        <div>Session Length</div>
      </div>
    </>
  );
}

export default App;
