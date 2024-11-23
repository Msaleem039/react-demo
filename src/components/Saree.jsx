import React from 'react'
import { lehnga } from '../Data/Saree/lenghaCholiPage2'
import { Link } from 'react-router-dom'
const Saree = () => {
    return (
        <div className='container'>
            <div className="row">
                {
                    lehnga.map((x, i) => {
                        return (
                            <div key={i} className="col-md-4 col-lg-3 col-sm-6 mb-3 text-center mt-3" >
                                <div className="card" style={{ width: '100%' }}>
                                    <img src={x.image} className="card-img-top mt-3" alt="..." style={{ aspectRatio: 3 / 2, objectFit: "contain", cursor: "pointer" }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{x.title.slice(0, 15)}</h5>
                                        {/* <p className="card-text">{x.description.slice(0,50)}</p> */}
                                        <Link to={`/saree/${x.slug}`} href="#" className="btn btn-primary">show Detail</Link>
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

export default Saree
