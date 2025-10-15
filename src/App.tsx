import React, { useEffect, useState } from "react";
import { createEvent, createStore } from "effector";

const increment = createEvent();
const $count = createStore(0).on(increment, (state) => state + 1);

export const App = () => {
  const [count, setCount] = useState($count.getState());

  useEffect(() => {
    const unsubscribe = $count.watch(setCount);
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>Effector Counter</h1>
      <p>Текущее значение: {count}</p>
      <button onClick={() => increment()}>Увеличить</button>
    </div>
  );
};
