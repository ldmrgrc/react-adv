import { useState } from "react";
import { ProductsInCart, Product } from "../interfaces/productInterfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductsInCart;
  }>({});

  const onAddToCart = ({
    product,
    count,
  }: {
    product: Product;
    count: number;
  }) => {
    // console.log({count, product});
    const { id } = product;

    setShoppingCart((oldShoppingCart) => {
      if (count === 0) {
        const { [id]: removedProduct, ...newShoppingCart } = oldShoppingCart;
        return newShoppingCart;
      }

      return {
        ...oldShoppingCart,
        [id]: {
          ...product,
          count,
        },
      };
    });
  };

  return { shoppingCart, onAddToCart };
};
