import React from "react";
import { increase , decrease , double } from "./hooks/useIncrease";


// import { increase , decrease } from "./hooks/useIncrease";


// import { decrease , increase } from "./hooks/useIncrease";


// import { decrease } from "./hooks/useIncrease";


function TestBabel() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <h1>count: {count}</h1>
      <button onClick={() => setCount(increase(count))}>add</button>
      <button onClick={() => setCount(decrease(count))}>sub</button>
      <button onClick={() => setCount(double(count))}>double</button>
    </>
  );
}
export { TestBabel };
