import React from 'react'
import PropTypes from 'prop-types'

const HeroSection = ({children,className}) => {
    return (
        <section className={['hero-wrapper bg-gradient-to-br from-blue-default to-blue-default-100 pt-20 pb-10', className].join(" ")}>
            <div className='container mx-auto'>
                {children}
            </div>
        </section>
    )
}

export default HeroSection;
