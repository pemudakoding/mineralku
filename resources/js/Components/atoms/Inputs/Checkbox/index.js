import React from 'react';

export default function Checkbox({ title, name, value, handleChange, checked }) {
    return (
        <label className="flex items-center">
            <input
                type="checkbox"
                name={name}
                value={value}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                onChange={(e) => handleChange(e)}
                checked={checked}
            />
            <span className="ml-2 text-sm font-medium text-gray-600">{title}</span>
        </label>
    );
}
