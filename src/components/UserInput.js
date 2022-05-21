import React, { useState } from "react";
import Countdown from "./Countdown";
import { Link } from "react-router-dom";

export default function UserInput() {
  const [minval, setmin] = useState(0);
  const [secval, setsec] = useState(0);
  const [state, setState] = useState(false);
  return (
    <div>
      <div style={{ margin: "30px", backgroundColor: "#1ab8c7" }}>
        <input
          style={{
            width: "300px",
            height: "100px",
            margin: "10px",
            fontSize: "20px",
            textAlign: "center",
            backgroundColor: "",
          }}
          type="number"
          placeholder="Enter Minutes"
          onChange={(e) => {
            setmin(e.target.value);
          }}
        />
        <input
          style={{
            width: "300px",
            height: "100px",
            margin: "10px",
            fontSize: "20px",
            textAlign: "center",
          }}
          type="number"
          placeholder="Enter Seconds"
          onChange={(e) => {
            setsec(e.target.value);
          }}
        />
        <button
          style={{
            width: "300px",
            height: "100px",
            margin: "10px",
            fontSize: "20px",
            textAlign: "center",
            borderRadius: "50px",
            cursor: "pointer",
            backgroundColor: "blue",
            color: "white",
          }}
          onClick={() => {
            setState(true);
          }}
        >
          {" "}
          Set Countdown
        </button>
      </div>

      {state && <Countdown value={{ minval, secval }} />}
      <Link to="/">
        <h5
          style={{
            color: "red",
            cursor: "pointer",
            textDecoration: "underline",
            backgroundColor: "blue",
            color: "white",
          }}
        >
          Click here for Stopwatch
        </h5>
      </Link>
    </div>
  );
}
