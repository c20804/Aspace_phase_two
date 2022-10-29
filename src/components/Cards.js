import React from 'react'

const Cards = (props) => {
    return (
        <div className='container' id='listing'>
          
            <div className="row row-cols-1 row-cols-md-4 g-4">

                {props.cards.map((property) => (

                    <div className="col" key={property.id.toString()}>
                        <div className="card h-100">
                        
                            <img src={require('../../public/images/' + property.thumbnail + '.jpg')} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className='cardhead'>
                                    <div className='rating'>
                                        <img src={require('./Star.png')} className='star' />
                                        <span>{property.rating}</span>
                                    </div>
                                    <h5 className="card-title">{property.location}</h5>
                                </div>
                                <p className="card-text">{property.title}<br />$<span
                                    className="price">{property.price}</span> hour</p>
                            </div>
                        </div>
                    </div>


                ))}

            </div>
        </div>

    )
}


export default Cards