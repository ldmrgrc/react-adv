import { useState } from "react";

export const useProduct = () => {
  const [counter, setCounter] = useState(0);
  //useState is a hook that allows us to create a state variable
  //and a function that allows us to update the state variable

  const increaseBy = (value: number) => {
    setCounter((prev) => Math.max(prev + value, 0));
  };

    return { counter, increaseBy };
};
