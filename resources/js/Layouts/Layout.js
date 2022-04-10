import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({children}) {
    console.log(children);
    return (
        <>
            <Header/>
            <main id='mineralku-app'>
                {children}
            </main>
            <Footer/>
        </>
    );
}
