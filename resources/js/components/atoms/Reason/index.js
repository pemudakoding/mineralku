import React from 'react'
import PropTypes from 'prop-types'

const Reason = ({title,desc,onRight}) => {

  return (
    <div className={`reason-content-item mb-6 text-center lg:text-left ${onRight ? 'lg:text-right' : ''}`}>
        <div className={`poppins text-black  ${onRight ? 'lg:flex flex-col items-end' : ''}`}>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className='lg:w-8/12'>
                {desc}
            </p>
        </div>
    </div>
  );
};

Reason.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    onRight: PropTypes.bool
}


export default Reason
