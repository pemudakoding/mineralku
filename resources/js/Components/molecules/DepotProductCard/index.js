import React from 'react'
import PropTypes from 'prop-types'

const DepotProductCard = props => {
    const {imageSrc, title, price} = props;

  return (
    <div className="product-card shadow-lg bg-white rounded-lg">
        <div className="product-card-image">
            <img src={imageSrc} alt="" />
        </div>
        <div className="product-card-body mt-4 text-center pb-4">
            <p className='text-sm'>
                {title}
            </p>
            <p className="text-sm mt-2">
                Rp. {price}
            </p>
        </div>
    </div>
  )
}

DepotProductCard.propTypes = {
    imageSrc: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number
}

export default DepotProductCard
