import React, { useState } from 'react'
import '../style/fakestyle.css'
import { useParams } from 'react-router-dom'
import { dummy } from '../Data/dumm';
const Fakedetail = () => {
    const {id}= useParams();
    const detail = dummy.products.find((x)=>x.id ==id)
    const [img, setImg]=useState(detail.thumbnail)
  return (
<div className="container bootdey">
  <div className="col-md-12">
    <section className="panel">
      <div className="row">
        <div className="col-md-6">
          <div className="pro-img-details">
            <img src={img} alt />
          </div>
          <div className="pro-img-list">
          {
            detail.images.map((x)=>{
                return(
                    <a href="#">
                    <img src={x} alt style={{width:"100px"}} onClick={()=>setImg(x)}/>
                  </a>
                )
            })
          }
      
          </div>
        </div>
        <div className="col-md-6">
          <h4 className="pro-d-title">
            <a href="#" className>
              Leopard Shirt Dress
            </a>
          </h4>
          <p>
            Praesent ac condimentum felis. Nulla at nisl orci, at dignissim dolor, The best product descriptions address your ideal buyer directly and personally. The best product descriptions address your ideal buyer directly and personally.
          </p>
          <div className="product_meta">
            <span className="posted_in"> <strong>Categories:</strong> <a rel="tag" href="#">Jackets</a>, <a rel="tag" href="#">Men</a>, <a rel="tag" href="#">Shirts</a>, <a rel="tag" href="#">T-shirt</a>.</span>
            <span className="tagged_as"><strong>Tags:</strong> <a rel="tag" href="#">mens</a>, <a rel="tag" href="#">womens</a>.</span>
          </div>
          <div className="m-bot15"> <strong>Price : </strong> <span className="amount-old">$544</span>  <span className="pro-price"> $300.00</span></div>
          <div className="form-group">
            <label>Quantity</label>
            <input type="quantiy" placeholder={1} className="form-control quantity" />
          </div>
          <p>
            <button className="btn btn-round btn-danger" type="button"><i className="fa fa-shopping-cart" /> Add to Cart</button>
          </p>
        </div>
      </div>
    </section>
  </div>
</div>

  )
}

export default Fakedetail
