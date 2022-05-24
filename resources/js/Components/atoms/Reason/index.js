import React from 'react'
import PropTypes from 'prop-types'

const Reason = ({title,desc,onRight}) => {

  return (
    <div className={`reason-content-item mb-6 lg:w-2/3 text-center ${onRight ? 'lg:text-right' : 'lg:text-left'}`}>
        <div className={`poppins text-black  ${onRight ? 'lg:flex flex-col items-end' : ''}`}>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className={`${onRight ? 'lg:ml-4:' : 'lg:mr-4'}`}>
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
