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
      <h1>Ask Tracker</h1>
      <p>Отслеживайте своей командой ваши рабочие задачи с гитхаба из коробки
        test for actions {count}
      </p>
      <button onClick={() => increment()}>click</button>
    </div>
  );
};
