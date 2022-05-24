import React from 'react';
import PropTypes from 'prop-types';
import * as IconFeather from 'react-feather';

const Icon = ({ icon }) => {
    const IconComponent = IconFeather[icon];

    return (
        <span>
            <IconComponent />
        </span>
    );
};

Icon.propTypes = {
    icon: PropTypes.string,
};

export default Icon;
