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

  const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {

    if (isControlled.current) {
      return onChange!({
        product,
        count: value,
      });
    }

    const newCounter = Math.max(0, counter + value);

    setCounter(newCounter);

    onChange && onChange({ product, count: newCounter });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return { counter, increaseBy };
};
