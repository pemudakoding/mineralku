import React from 'react';
import PropTypes from 'prop-types';
import ButtonColIcon from './ButtonColIcon';
import './index.scss';
import { Link } from '@inertiajs/inertia-react';

const Button = ({ type, method, as, href, icon, title, style, className, onClick }) => {
    if (style == 'col-icon') {
        return (
            <ButtonColIcon
                title={title}
                type={type}
                method={method}
                as={as}
                href={href}
                icon={icon}
            />
        );
    }

    if(method && href){
        return <Link
            href={href}
            method={method}
            as={as}
            type={type}
            className={[
                'poppins font-medium px-12 py-3 rounded-full transition-all duration-100 ease-in inline-block',
                getStyleClass(style),
                className,
            ].join(' ')}
            onclick={onclick}
        >
            {title}
        </Link>
    }

    return (
        <button
            className={[
                'poppins font-medium px-12 py-3 rounded-full transition-all duration-100 ease-in inline-block',
                getStyleClass(style),
                className,
            ].join(' ')}
            onClick={onClick}
        >
            {title}
        </button>
    );
};

function getStyleClass(style) {
    if (style == 'primary') {
        return ' bg-blue-default-100 border-2 border-blue-default-100 text-white hover:bg-blue-default-200 shadow-primary';
    }

    if (style == 'primary-outline') {
        return 'bg-transparent border-2 border-white hover:bg-white text-white hover:text-blue-default-100 shadow-primary';
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
    className: PropTypes.string,
};

export default Button;
