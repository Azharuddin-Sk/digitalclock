import React from "react";
import styles from "./CurrentDate.module.css";

function CurrentDate() {
  const date = new Date();
  return <p className={styles.date}>Date : {date.toDateString()}</p>;
}

export default CurrentDate;
