import { createContext, CSSProperties, ReactNode } from 'react';
import { useProduct } from '../hooks/useProduct';
import { onChangeArgs, Product, ProductContextProps } from '../interfaces/productInterfaces';
import styles from '../styles/styles.module.css';

export interface ProductCardProps {
    product: Product;
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children, className, style, onChange, value }: ProductCardProps) => {

    const { counter, increaseBy } = useProduct( { onChange, product, value } );

    return (
        <Provider value={{
            product,
            counter,
            increaseBy
        }}>
            <div
                className={`${styles.productCard} ${className ? className : ''}`}
                style={style ? style : {}}
            >
                {children}
            </div>
        </Provider>
    )
}
