import { useState } from "react";
import reactLogo from "src/resources/assets/images/react.svg";
import viteLogo from "/vite.svg";
import "./css/style.css";

export default function Root() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Component Driven Redux</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <p className="mt-10">
          Edit <code>src/app/views/RootView.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">

      </p>
    </>
  );
}
