import React from 'react';

export default function Radio({ title, name, value, handleChange, checked }) {
    return (
        <label className="flex items-center">
            <input
                type="radio"
                name={name}
                value={value}
                className="rounded-full border-gray-300 text-blue-default-200 shadow-sm focus:border-blue-default-200 focus:ring focus:ring-blue-default-200 focus:ring-opacity-50"
                onChange={(e) => handleChange(e)}
                checked={checked}
            />
            <span className="ml-2 text-sm font-medium text-gray-600">{title}</span>
        </label>
    );
}
