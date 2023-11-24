import { useState } from "react";
import RootView from "../views/RootView";

export default function Root() {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => {
    setCount((prevCount) => prevCount + 1);
  };
  const data = {
    count,
  };
  const events = {
    increment
  };

  return <RootView data={data} events={events} />;
}