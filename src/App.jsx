import React from "react";
import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import CurrentDate from "./components/CurrentDate";
import CurrentTime from "./components/CurrentTime";
import "./App.css";

function App() {
  return (
    <>
      <ClockHeading />
      <ClockSlogan />
      <CurrentDate />
      <CurrentTime />
    </>
  );
}

export default App;
