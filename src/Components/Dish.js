import React from 'react'

const Dish = ({ dishObject }) => {
    return (
        <div className="p-4">
            <article className="card">
                <figure className="card-image">
                    <figure className="image is-16by9">
                        <img src={dishObject.url} alt=""/>
                    </figure>
                </figure>
                <div className="card-content">
                        <div className="media">
                            <strong className="media-left is-size-4 is-size-5-mobile">{dishObject.name}</strong>
                            <span className="media-right">{dishObject.price}</span>
                        </div>
                        <div className="content is-size-7-mobile">
                            <br/>
                            {dishObject.description}
                        </div>
                </div>
            </article>
        </div>
    )
}

export default Dish
