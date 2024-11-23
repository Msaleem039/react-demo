import React from 'react'
import { dummy } from '../Data/dumm'
import { Link } from 'react-router-dom'

const Fakedata = () => {
  return (
    <div className='container' style={{marginTop:"80px"}}>
            <div className="row">
                {
                dummy.products.map((x, i) => {
                        return (
                            <div key={i} className="col-md-4 col-lg-3 col-sm-6 mb-3 text-center" >
                                <div className="card" style={{ width: '100%' }}>
                                    <img src={x.thumbnail} className="card-img-top" alt="..." style={{ aspectRatio: 3 / 2, objectFit: "contain" , cursor:"pointer" }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{x.title.slice(0,15)}</h5>
                                        <p className="card-text">{x.description.slice(0,50)}</p>
                                        <Link to={`/fakedata/${x.id}`} href="#" className="btn btn-primary">show Detail</Link>
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

export default Fakedata
