import { useEffect, useRef, useState } from "react";
import {
  onChangeArgs,
  Product,
  InitialValues,
} from "../interfaces/productInterfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const count = initialValues?.count;
  const maxCount = initialValues?.maxCount;

  const [counter, setCounter] = useState<number>(count || value);
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    if (initialValues?.maxCount && counter + value > initialValues.maxCount) {
      return;
    }

    const newValue = Math.max(0, counter + value);

    setCounter(newValue);
    onChange && onChange({ product, count: newValue });
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  const reset = () => {
    setCounter(count || value);
    onChange && onChange({ product, count: 0 });
  };

  return {
    counter,
    maxCount,
    isMaxCountReached: !!count && maxCount === counter,
    isMinCountReached: counter === 0,
    increaseBy,
    reset,
  };
};
