import React, { useState } from 'react'
import { ProductImage, ProductTitle, ProductButtons, ProductCard } from "../components/index";
import { Product, ProductsInCart } from '../interfaces/productInterfaces';
import '../styles/custom-styles.css'
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';


export const ShoppingPage = () => {

  const { shoppingCart, onAddToCart } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            className="bg-dark"
            product={product}
            onChange={onAddToCart}
            value={shoppingCart[product.id]?.count}
          >
            <ProductImage className='custom-img' />
            <ProductTitle className="text-white" />
            <ProductButtons className='custom-button' />
          </ProductCard>

        ))}

      </div>

      <div className='shopping-card'>
        {
          Object.keys(shoppingCart).map(key => (
            <ProductCard
              key={key}
              className="bg-dark"
              style={{ width: '6.25rem' }}
              product={shoppingCart[key]}
              onChange={onAddToCart}
              value={shoppingCart[key].count}
            >
              <ProductImage className='custom-img' />
              <ProductButtons className='custom-button' style={{ display: "flex", justifyContent: "center" }} />
            </ProductCard>
          ))
        }
      </div>

    </div>
  )
}
