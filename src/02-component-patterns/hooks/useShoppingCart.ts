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

    const { id } = product;

    setShoppingCart((oldShoppingCart) => {
      const productInCart: ProductsInCart = oldShoppingCart[id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        return {
          ...oldShoppingCart,
          [id]: {
            ...productInCart,
            count: productInCart.count + count,
          },
        };
      }

      const { [id]: removedProduct, ...newShoppingCart } = oldShoppingCart;
      return newShoppingCart;

      // if (count === 0) {
      //   const { [id]: removedProduct, ...newShoppingCart } = shoppingCart
      //   return newShoppingCart
      // }

      // return {
      //   ...shoppingCart,
      //   [id]: {
      //     ...product,
      //     count
      //   }
      // }
    });
  };

  return { shoppingCart, onAddToCart };
};
