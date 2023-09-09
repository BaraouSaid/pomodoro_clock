import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="container h-screen bg-slate-100 flex flex-col items-center justify-center">
        <div>
          <h1>25 + 5 Clock</h1>
        </div>
        <div className="flex flex-row gap-5">
          <div>
            <div id="break-label">Break length</div>
            <div>UP 5 DOWN</div>
          </div>
          <div>
            <div id="session-label">Session Length</div>
            <div>UP 25 DOWN</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
