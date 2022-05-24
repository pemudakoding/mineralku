import React from 'react';
import PropTypes from 'prop-types';

const HeroSection = ({ children, className }) => {
    return (
        <section
            className={[
                'relative hero-wrapper bg-gradient-to-br from-blue-default to-blue-default-100 pt-20 pb-10',
                className,
            ].join(' ')}
        >
            <div className="container mx-auto">{children}</div>
            <div className="absolute z-30 -bottom-10 md:hidden right-0 left-0">
                <svg
                    className="text-blue-default-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                >
                    <path
                        fill="currentColor"
                        fill-opacity="1"
                        d="M0,64L48,90.7C96,117,192,171,288,170.7C384,171,480,117,576,90.7C672,64,768,64,864,74.7C960,85,1056,107,1152,106.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </div>
            <div className="absolute z-10 -bottom-6 md:hidden right-0 left-0">
                <svg
                    className="text-blue-default-200"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                >
                    <path
                        fill="currentColor"
                        fill-opacity="1"
                        d="M0,96L48,85.3C96,75,192,53,288,64C384,75,480,117,576,160C672,203,768,245,864,229.3C960,213,1056,139,1152,128C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;
