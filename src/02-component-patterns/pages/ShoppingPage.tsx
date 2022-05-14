import React from 'react'
import { ProductImage, ProductTitle, ProductButtons, ProductCard } from "../components/index";
import '../styles/custom-styles.css'
const product = {
  id: '1',
  title: 'Coffee Mug',
  img: './coffee-mug.png',
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Stores</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
        <ProductCard
          product={product}
          className="bg-dark"
        >
          <ProductCard.Image className='custom-img' />
          <ProductCard.Title className="text-white" />
          <ProductCard.Buttons className='custom-button' />
        </ProductCard>

        <ProductCard
          product={product}
          style={{
            backgroundColor: '#5f9ea0',
            color: 'white',
          }}
        >
          <ProductImage className='custom-img' />
          <ProductTitle className="text-white" />
          <ProductButtons className='custom-button' />
        </ProductCard>

        <ProductCard
          product={product}
          style={{
            backgroundColor: 'purple',
            color: 'white',
          }}
        >
          <ProductImage style={{
            borderRadius: '20px',
            padding: '10px',
            height: 'auto',
            width: 'calc(100% - 20px)',
          }} />
          <ProductTitle style={{
           fontWeight: 'bold',
          }} />
          <ProductButtons className='custom-button' style={{
            display: 'flex',
            justifyContent: 'end',
          }} />
        </ProductCard>
      </div>
    </div>
  )
}
