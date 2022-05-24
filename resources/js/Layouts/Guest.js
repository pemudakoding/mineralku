import React from 'react';
import { ApplicationLogo } from '@/Components';
import { Link } from '@inertiajs/inertia-react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
            <div className="w-full sm:max-w-md my-6 px-8 py-4 mx-auto">{children}</div>
        </div>
    );
}
