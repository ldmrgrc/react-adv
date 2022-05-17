import { ProductImage, ProductTitle, ProductButtons, ProductCard } from "../components/index";
import '../styles/custom-styles.css'
import { products } from '../data/products';

const product = products[0];


export const ShoppingPage = () => {


  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        key={product.id}
        className="bg-dark"
        product={product}
        initialValues={{ count: 0, maxCount: 10 }}
      >
        {
          ({reset, count, increaseBy, isMaxCountReached, isMinCountReached, maxCount}) => (
            <>
              <ProductImage className='custom-img' />
              <ProductTitle className="text-white" />
              <ProductButtons className='custom-button' />
              <button onClick={reset}>Reset</button>
              {!isMinCountReached && <button onClick={() => increaseBy(-2)}>-2</button>}
              {!isMaxCountReached && <button onClick={() => increaseBy(2)}>+2</button>}
              <span style={{color: "white", margin: "10px"}}>{count} - {maxCount}</span>
            </>
          )
        }
      </ProductCard>

    </div>
  )
}
