


import React from 'react'
import Header from '../components/Header'
import products from '../data/data'
export default function Home() {
  return (
    <div>
        <Header/>
        <div className="brand-products-wrapper">
           <div className="container">
           <div className="products-inner">
            <div className="row">
              {
                 products.map((product)=>{
                  return(
                    <div id={product} key={product.id} className='col-md-3' >
                      <img src={product.image} alt="" />
                      <h1>{product.title}</h1>
                      <p>{product.description}</p>
                      <span>{product.category}</span>
                      <p>{product.price}</p>
                      <button className='btn btn-primary'>Add to cart</button>
                    </div>
                  )
                 })
              }
            </div>
            </div>
           </div>
        </div>
    </div>
  )
}
