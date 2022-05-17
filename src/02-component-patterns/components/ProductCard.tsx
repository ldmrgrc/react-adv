import { createContext, CSSProperties, ReactNode } from 'react';
import { useProduct } from '../hooks/useProduct';
import { InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/productInterfaces';
import styles from '../styles/styles.module.css';

export interface ProductCardProps {
    product: Product;
    children?: (args: ProductCardHandlers) => ReactNode;
    className?: string;
    style?: CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: ProductCardProps) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, isMinCountReached, reset } = useProduct( { onChange, product, value, initialValues } );

    return (
        <Provider value={{
            counter,
            increaseBy,
            maxCount,
            product,
        }}>
            <div
                className={`${styles.productCard} ${className ? className : ''}`}
                style={style ? style : {}}
            >
                {children && children({
                    count: counter,
                    isMaxCountReached,
                    isMinCountReached,
                    maxCount: maxCount,
                    product,
                    increaseBy,
                    reset,
                })}
            </div>
        </Provider>
    )
}
