import React from "react";
import styles from "./ClockSlogan.module.css";

function ClockSlogan() {
  return (
    <p className={styles.slogan}>
      This clock shows current date and time in IST
    </p>
  );
}

export default ClockSlogan;
