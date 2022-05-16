import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/productInterfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
}: useProductArgs) => {
  const [counter, setCounter] = useState(value);


  const increaseBy = (value: number) => {

    const newValue = Math.max(0, counter + value);

    setCounter(newValue);

    onChange && onChange({ product, count: newValue });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return { counter, increaseBy };
};
