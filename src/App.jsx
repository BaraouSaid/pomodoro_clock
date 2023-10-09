import { useState, useEffect } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { BsFillPlayFill, BsPauseFill, BsArrowRepeat } from 'react-icons/bs';
import './App.css';

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(1500);
  const [isCounting, setIsCounting] = useState(false);
  const [isOnBreak, setIsOnBreak] = useState(false);
  const [sessionTitle, setSessionTitle] = useState('Session');

  const sound = document.getElementById('beep');

  function incrementBreakLength() {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
    return;
  }

  function decrementBreakLength() {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
    return;
  }

  function incrementSessionLength() {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      setTimeLeft(timeLeft + 60);
    }
    return;
  }

  function decrementSessionLength() {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      setTimeLeft(timeLeft - 60);
    }
    return;
  }

  const counter = setInterval(() => {
    if (isCounting && timeLeft > 0) {
      setTimeLeft(timeLeft - 1);
    }
    return clearInterval(counter);
  }, 1000);

  function formatTime() {
    const minutes = Math.floor(timeLeft / 60);
    // seconds = timeLeft - minutes * 60;
    const seconds = timeLeft % 60;
    //To change if a problem occur
    const formattedMinutes =
      minutes < 10 && minutes >= 0 ? '0' + minutes : minutes;
    const formattedSeconds =
      seconds < 10 && seconds >= 0 ? '0' + seconds : seconds;
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  const formattedTime = formatTime();

  function toggleCounter() {
    clearInterval(counter);
    setIsCounting(!isCounting);
    console.log('togglebutton');
  }

  function resetTimer() {
    // if (timeLeft == 0 && !isOnBreak) {
    //   setIsOnBreak(true);
    //   setTimeLeft(breakLength * 60);
    //   setSessionTitle('Break');
    //   sound.play();
    // }
    if (formattedTime == '00:00' && !isOnBreak) {
      setIsOnBreak(true);
      setTimeLeft(breakLength * 60);
      setSessionTitle('Break');
      sound.play();
    }

    // if (timeLeft == 0 && isOnBreak) {
    //   setIsOnBreak(false);
    //   setTimeLeft(sessionLength * 60);
    //   setSessionTitle('Session');
    //   sound.pause();
    //   sound.currentTime = 0;
    // }
    if (formattedTime == '00:00' && isOnBreak) {
      setIsOnBreak(false);
      setTimeLeft(sessionLength * 60);
      setSessionTitle('Session');
      sound.pause();
      sound.currentTime = 0;
    }
  }

  function countdown() {
    if (isCounting) {
      counter;
      resetTimer();
      // setTimeLeft(timeLeft);
      console.log('countdown');
    } else {
      // setIsCounting(false);
      clearInterval(counter);
    }
  }

  function reset() {
    clearInterval(counter);
    setIsCounting(false);
    setTimeLeft(1500);
    setBreakLength(5);
    setSessionLength(25);
    setSessionTitle('Session');
    sound.pause();
    sound.currentTime = 0;
    console.log('reset');
    console.log(`break length is ${breakLength}
    Session Length is ${sessionLength} time left is ${timeLeft}`);
  }

  // const [isOnReset, setIsOnReset] = false;

  useEffect(() => {
    // if (isCounting) {
    countdown();
    // }

    console.log('useEffect');
    console.log(`break length is ${breakLength}
    Session Length is ${sessionLength} time left is ${timeLeft}`);
  }, [isCounting, timeLeft, counter]);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-screen gap-10 text-3xl font-bold bg-cyan-800">
        <div>
          <h1 className="mb-20 text-5xl font-extrabold">Pomodoro Clock</h1>
        </div>
        <div className="flex flex-row gap-24">
          <div className="flex flex-col items-center">
            <div id="break-label">Break Length</div>
            <div className="flex items-center gap-5">
              <button
                id="break-increment"
                onClick={incrementBreakLength}
                disabled={isCounting}
              >
                <FaArrowUp className="text-yellow-600 hover:cursor-pointer" />
              </button>
              <p id="break-length">{breakLength}</p>
              <button
                id="break-decrement"
                onClick={decrementBreakLength}
                disabled={isCounting}
              >
                <FaArrowDown className="text-yellow-600 hover:cursor-pointer" />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div id="session-label">Session Length</div>
            <div className="flex items-center gap-5">
              <button
                id="session-increment"
                onClick={incrementSessionLength}
                disabled={isCounting}
              >
                <FaArrowUp className="text-amber-600 hover:cursor-pointer" />
              </button>
              <p id="session-length">{sessionLength}</p>
              <button
                id="session-decrement"
                onClick={decrementSessionLength}
                disabled={isCounting}
              >
                <FaArrowDown className="text-amber-600 hover:cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-40 border-8 rounded-full h-80 w-80 bg-amber-500 border-amber-800">
          <h2 id="timer-label" className="text-3xl">
            {sessionTitle}
          </h2>
          <p id="time-left" className="text-8xl">
            {formattedTime}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-0 p-1 border-4 border-amber-600 rounded-xl hover:cursor-pointer">
            <button id="start_stop" onClick={toggleCounter}>
              {isCounting ? <BsPauseFill /> : <BsFillPlayFill />}
            </button>
          </div>
          <button id="reset" onClick={reset} disabled={timeLeft == 1500}>
            <BsArrowRepeat className="hover:cursor-pointer" />
          </button>
        </div>
      </div>
      <audio
        id="beep"
        // preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </>
  );
}

export default App;
