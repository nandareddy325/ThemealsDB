import './App.css';
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import FireValid from './Components/FirebaseValidation';

const App = ()=> {
  const targetDate = new Date("November 06, 2024 11:38:00").getTime();
  const [timeRemaining, setTimeRemaining] = useState(targetDate - new Date().getTime());
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;
      setTimeRemaining(timeLeft > 0 ? timeLeft : 0);
      if (timeLeft <= 0) {
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);
  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return {
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0'),
    };
  };
  const { hours, minutes, seconds } = formatTime(timeRemaining);
  return (
    <div className='align-content-center bg-secondary' style={{ height: "100vh" }}>
      <div className='row'>
        <div className='col-12'>
          <div className="text-center">
            {timeRemaining > 0 ? (
              <div className='row'>
                <div className='col-4 m-auto '>
                <h3 className='text-center text-white bg-info text-'>Time CountDown</h3>
                <div className='shadow p-4  rounded-3'>
                <span className='display-4 bg-info px-3  rounded-3'>{hours}</span>
                <span className='display-4'> : </span>
                <span  className='display-4 bg-success  px-3  rounded-3'>{minutes}</span>
                <span className='display-4'>: </span>
                <span className='display-4 bg-primary px-3 rounded-3'>{seconds}</span>
              </div>
                </div>
              </div>
            ) : (
              <FireValid />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
