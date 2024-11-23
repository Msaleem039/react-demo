import React from 'react'
import { api } from '../Data/api'
import { useParams } from 'react-router-dom'

const GallerDetail = () => {
    const {id}= useParams();
    const detail = api.products.find((x)=>x.id ==id)
  return (
    <div className='container'>
        <div className="row mt-5">
            <div className="col-md-6">
                <img src={detail.image} alt="" className='img-fluid'/>
            </div>
            <div className="col-md-6">
                <h2>{detail.name}</h2>
                <p>{detail.description}</p>
                <p>Price: {detail.price}</p>
                <button className='btn btn-primary'>AddCart</button>
            </div>
        </div>
      
    </div>
  )
}

export default GallerDetail
