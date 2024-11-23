import React from 'react'
import { lehnga } from '../Data/Saree/lenghaCholiPage2'
import { useParams } from 'react-router-dom'

const SareeDetail = () => {
    const {slug}= useParams();
    const items = lehnga.find((x)=>x.slug == slug)
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-6">
                <img src={items.image} alt="Saree" className="img-fluid" />
            </div>
            <div className="col-md-6">
                <h2>{items.name}</h2>
            </div>
        </div>
      
    </div>
  )
}

export default SareeDetail
