import React from 'react'
import { product } from '../Data/data'

const Product = () => {
  return (
    <div className='container' style={{marginTop:"80px"}}>
      <div className="row">
      {
        product.map((x)=>{
          return(
            <div className='col-md-4 col-lg-3 col-sm-6 mb-3'>
 <div className="card" style={{width: '100%'}}>
  <img src={x.image} className="card-img-top py-2" alt="..."  
  style={{aspectRatio:3/2, objectFit:"contain"}}/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

              </div>
          )
        })
      }
      </div>

    </div>
  )
}

export default Product
