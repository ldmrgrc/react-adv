import { CSSProperties, useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export interface ProductTitleProps {
    title?: string;
    className?: string;
    style?: CSSProperties;
}

export const ProductTitle = ({ title, className, style }: ProductTitleProps) => {
    const { product } = useContext(ProductContext);
    const titleText = title || product.title;

    return (
        <h3
            className={`${styles.productDescription} ${className ? className : ''}`}
            style={style ? style : {}}
        >
            { titleText }
        </h3>
    );
};
