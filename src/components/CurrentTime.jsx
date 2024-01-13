import { useEffect, useState } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <p className="date">Date : {time.toDateString()}</p>
      <div className="container">
        <div className="clock">
          <span id="hrs">
            {(time.getHours() < 10 ? "0" : "") + time.getHours()}
          </span>
          <span>:</span>
          <span id="min">
            {(time.getMinutes() < 10 ? "0" : "") + time.getMinutes()}
          </span>
          <span>:</span>
          <span id="sec">
            {(time.getSeconds() < 10 ? "0" : "") + time.getSeconds()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CurrentTime;
