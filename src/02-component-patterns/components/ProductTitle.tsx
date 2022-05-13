import styles from '../styles/styles.module.css';
import { useContext } from 'react';
import { ProductContext } from './ProductCard';


export const ProductTitle = ({ title }: { title?: string; }) => {
    const { product } = useContext(ProductContext);
    const titleText = title || product.title;

    return (
        <h3 className={styles.productDescription}>{titleText}</h3>
    );
};
