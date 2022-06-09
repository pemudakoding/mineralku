import React from 'react';
import Header from './Header';
import { Footer } from '@/Components';

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main id="mineralku-app">{children}</main>
            {/* <Footer /> */}
        </>
    );
}
