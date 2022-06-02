import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';

const Input = ({
    type = 'text',
    name,
    value,
    className,
    autoComplete,
    required,
    isFocused,
    handleChange,
    placeholder,
    style,
    icon,
}) => {
    const input = useRef();
    const IconComponent = Icon[icon];

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    if (style == 'input-icon') {
        return (
            <div className="w-full relative">
                <span className="absolute inset-y-0 left-0 text-gray-600 flex items-center pl-2">
                    <IconComponent />
                </span>
                <input
                    type={type}
                    name={name}
                    value={value}
                    className={
                        `w-full py-2 text-sm bg-white text-gray-600 font-medium rounded-md pl-10 border-2 border-gray-300 focus:outline-none` +
                        className
                    }
                    ref={input}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    required={required}
                    onChange={(e) => handleChange(e)}
                />
            </div>
        );
    }

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                className={
                    `border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm ` +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
};

Input.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    autoComplete: PropTypes.string,
    icon: PropTypes.string,
    required: PropTypes.string,
    style: PropTypes.string,
    className: PropTypes.string,
    handleChange: PropTypes.string,
    isFocused: PropTypes.bool,
    name: PropTypes.string,
    placeholder: PropTypes.string,
};

export default Input;
