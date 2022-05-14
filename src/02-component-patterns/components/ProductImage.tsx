import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';

export interface ProductImageProps {
    className?: string;
    img?: string;
    style?: CSSProperties;
}

export const ProductImage = ({ img, className, style }: ProductImageProps) => {
    const { product } = useContext(ProductContext);
    const image = img || (product.img || noImage);

    return (
        <img
            alt="Product Image"
            className={`${styles.productImg} ${className ? className : ''}`}
            src={image}
            style={style ? style : {}}
        />
    );
};
