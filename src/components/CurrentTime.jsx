import React, { useState, useEffect } from "react";
import styles from "./CurrentTime.module.css";

function CurrentTime() {
  const [hour, setHour] = useState(new Date().getHours());
  const [minute, setMinute] = useState(new Date().getMinutes());
  const [second, setSecond] = useState(new Date().getSeconds());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHour(new Date().getHours());
      setMinute(new Date().getMinutes());
      setSecond(new Date().getSeconds());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.clock}>
        <span id={styles.hours}>{(hour < 10 ? "0" : "") + hour}</span>
        <span>:</span>
        <span id={styles.minutes}>{(minute < 10 ? "0" : "") + minute}</span>
        <span>:</span>
        <span id={styles.seconds}>{(second < 10 ? "0" : "") + second}</span>
      </div>
    </div>
  );
}

export default CurrentTime;
