import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { FaArrowUp } from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <>
      <div className="container flex flex-col items-center justify-center h-screen bg-slate-100">
        <div>
          <h1>25 + 5 Clock</h1>
        </div>
        <div className="flex flex-row gap-5">
          <div>
            <div id="break-label">Break length</div>
            <div>
              <FaArrowUp /> 5 DOWN
            </div>
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
