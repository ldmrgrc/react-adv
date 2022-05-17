import styles from '../styles/styles.module.css';
import { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';
import { useCallback } from 'react';

export interface ProductButtonsProps {
    className?: string;
    style?: CSSProperties;
}
export const ProductButtons = ({ className, style }: ProductButtonsProps) => {
    const { counter, increaseBy, maxCount } = useContext(ProductContext);

    const isMaxReached = useCallback(
      () => !!maxCount && counter === maxCount,
      [counter, maxCount],
    )

    const isMinReached = useCallback(
        () => counter === 0,
        [counter],
      )
    

    return (
        <div 
        className={`${styles.buttonsContainer} ${className ? className : '' } `}
        style={style ? style : {}}
        >

            <button
                className={`${isMinReached() ? styles.buttonMinus+' '+styles.disabled : styles.buttonMinus}`}
                onClick={() => increaseBy(-1)}
                disabled={isMinReached()}
            >
                -
            </button>

            <div className={styles.countLabel}>{counter}</div>

            <button
                className={`${isMaxReached() ? styles.buttonAdd+' '+styles.disabled : styles.buttonAdd }`}
                onClick={() => increaseBy(1)}
                disabled={isMaxReached()}
            >
                +
            </button>
        </div>
    );
};
