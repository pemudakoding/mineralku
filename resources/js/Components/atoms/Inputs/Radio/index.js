import React from 'react';

export default function Radio({ title, name, value, onChange, onClick, checked, id }) {
    return (
        <label className="flex items-center">
            <input
                type="radio"
                name={name}
                value={value}
                id={id}
                className="rounded-full border-gray-300 text-blue-default-200 shadow-sm focus:border-blue-default-200 focus:ring focus:ring-blue-default-200 focus:ring-opacity-50"
                onChange={(e) => onChange(e)}
                onClick={(e) => onClick(e)}
                checked={checked}
            />
            <span className="ml-2 text-sm font-medium text-gray-600">{title}</span>
        </label>
    );
}
