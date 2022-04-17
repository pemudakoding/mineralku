import React from 'react';
import PropTypes from 'prop-types'
import ButtonColIcon from './ButtonColIcon';
import './index.scss';

const Button = ({type, method, as, href, icon, title, style}) => {
    if(style == 'col-icon') {
        return <ButtonColIcon
            title={title}
            type={type}
            method={method}
            as={as}
            href={href}
            icon={icon}/>
    }
}

Button.propTypes = {
    type: PropTypes.string,
    method: PropTypes.string,
    as: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
    style: PropTypes.string,
}

export default Button;
