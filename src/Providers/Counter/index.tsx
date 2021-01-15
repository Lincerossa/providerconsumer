import React, { createContext, useCallback, useState } from "react";

import * as T from "./types";

export const Handler = createContext<T.Handler | undefined>(undefined);
export const State = createContext<T.State | undefined>(undefined);

const CounterProvider = (props: T.Counter) => {
  const [count, setCount] = useState<number>(props.initialCount);

  const handleAdd = useCallback((): void => setCount((c) => c + 1), [setCount]);
  const handleRemove = useCallback((): void => setCount((c) => c - 1), [
    setCount
  ]);
  return (
    <State.Provider value={{ count }}>
      <Handler.Provider value={{ handleAdd, handleRemove }}>
        {props.children}
      </Handler.Provider>
    </State.Provider>
  );
};

export default CounterProvider;
