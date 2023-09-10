import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <>
      <div className="container flex flex-col items-center justify-center h-screen gap-5 bg-slate-100">
        <div>
          <h1>25 + 5 Clock</h1>
        </div>
        <div className="flex flex-row gap-5">
          <div>
            <div id="break-label">Break length</div>
            <div className="flex items-center gap-2">
              <FaArrowUp id="break-decrement" /> 5{' '}
              <FaArrowDown id="break-increment" />
            </div>
          </div>
          <div>
            <div id="session-label">Session Length</div>
            <div className="flex items-center gap-2">
              <FaArrowUp id="session-decrement" /> 25{' '}
              <FaArrowDown id="session-increment" />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default App;
