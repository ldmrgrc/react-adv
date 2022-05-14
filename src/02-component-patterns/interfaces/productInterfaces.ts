import { ProductButtonsProps } from "../components/ProductButtons";
import { ProductCardProps } from "../components/ProductCard";
import { ProductImageProps } from "../components/ProductImage";
import { ProductTitleProps } from "../components/ProductTitle";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  product: Product;
  increaseBy: (value: number) => void;
  counter: number;
}

export interface ProductCardHOCProps {
  (props: ProductCardProps): JSX.Element;
  Title: (props: ProductTitleProps) => JSX.Element;
  Image: (props: ProductImageProps) => JSX.Element;
  Buttons: (props: ProductButtonsProps) => JSX.Element;
}
