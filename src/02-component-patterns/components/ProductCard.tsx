import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, ProductCardProps } from '../interfaces/productInterfaces';
import styles from '../styles/styles.module.css';
import { ProductImage, ProductTitle, ProductButtons } from "./index";


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {

    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{
            product,
            counter,
            increaseBy
            }}>
            <div className={styles.productCard}>
            
                {children}
            
            </div>
        </Provider>
    )
}
