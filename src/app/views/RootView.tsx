import { useState } from "react";
import "./css/style.css";

interface Props {
  data: {
    count: number;
  },
  events: {
    increment: () => void;
  }
}

export default function Root(props: Props) {
  
  return (
    <>
      <h1>Component Driven Redux</h1>
      <div className="card">
        <button onClick={props.events.increment}>
          count is {props.data.count}
        </button>

        <p className="mt-10">
          Edit <code>src/app/views/RootView.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}