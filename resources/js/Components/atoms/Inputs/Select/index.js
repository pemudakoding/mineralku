import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {Icon} from '@/Components';

const Select = ({
    type = 'text',
    name,
    value,
    className,
    autoComplete,
    required,
    isFocused,
    onChange,
    placeholder,
    style,
    icon,
    children
}) => {
    const selectRef = useRef();

    useEffect(() => {
        if (isFocused) {
            Select.current.focus();
        }
    }, []);

    if (style == 'input-icon') {
        return (
            <div className="w-full relative">
                <span className="absolute inset-y-0 left-0 text-gray-600 flex items-center pl-2">
                    <Icon icon={icon} />
                </span>
                <select
                    type={type}
                    name={name}
                    value={value}
                    className={
                        `w-full py-2 text-sm bg-white text-gray-600 font-medium rounded-md pl-10 border-2 border-gray-300 focus:outline-none focus:border-blue-default-200 focus:ring focus:ring-blue-default-200 focus:ring-opacity-50` +
                        className
                    }
                    ref={selectRef}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    required={required}
                    onChange={(e) => onChange(e)}
                > {children} </select>
            </div>
        );
    }


};

Select.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    autoComplete: PropTypes.string,
    icon: PropTypes.string,
    required: PropTypes.string,
    style: PropTypes.string,
    className: PropTypes.string,
    isFocused: PropTypes.bool,
    name: PropTypes.string,
    placeholder: PropTypes.string,
};

export default Select;
