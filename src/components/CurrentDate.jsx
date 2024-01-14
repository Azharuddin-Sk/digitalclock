import React from "react";

function CurrentDate() {
  const date = new Date();
  return <p className="date">Date : {date.toDateString()}</p>;
}

export default CurrentDate;
