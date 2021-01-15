import React, { useContext } from "react";
import "./styles.css";
import * as T from "./Providers/Counter/types";
import CounterProvider, { State, Handler } from "./Providers/Counter";

const App: React.FC = () => {
  const { count } = useContext(State) as T.State
  const { handleAdd, handleRemove } = useContext(Handler) as T.Handler

  return (
    <>
      <div>current count : {count}</div>
      <button onClick={handleAdd}>add</button>
      <button onClick={handleRemove}>remove</button>
    </>
  )
}

export default () => (
  <CounterProvider initialCount={3}>
    <App />
  </CounterProvider>
);
