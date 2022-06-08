import React from 'react';
import PropTypes from 'prop-types';
import * as IconFeather from 'react-feather';

const Icon = ({ icon, size }) => {
    const IconComponent = IconFeather[icon];

    return (
        <span>
            <IconComponent size={size} />
        </span>
    );
};

Icon.propTypes = {
    icon: PropTypes.string,
};

export default Icon;
