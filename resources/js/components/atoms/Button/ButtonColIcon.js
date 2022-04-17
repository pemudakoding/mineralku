import React from 'react'
import PropTypes from 'prop-types'
import {Link} from '@inertiajs/inertia-react';
import * as Icon from 'react-feather';


const ButtonColIcon = ({type, method, as, href, icon,title}) => {
    const IconComponent = Icon[icon];

    return (
        <Link
            href={href}
            method={method}
            as={as}
            type={type}
            className="button-icon flex flex-col justify-center items-center"
        >
            <IconComponent/>
            <span>{ title }</span>
        </Link>
    )
}

ButtonColIcon.propTypes = {
    type: PropTypes.string,
    method: PropTypes.string,
    as: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
}


export default ButtonColIcon;
