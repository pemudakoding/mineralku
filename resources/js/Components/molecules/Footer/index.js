import React from 'react';
import { Button } from '@/Components';

const Footer = (props) => {
    return (
        <footer className="footer-wrapper z-50 bg-white fixed w-full bottom-0 py-3 shadow-2xl">
            <div className="nav-wrapper container mx-auto">
                <nav>
                    <ul className="flex justify-center">
                        <li className="mr-10">
                            <Button title="Home" href="/" style="col-icon" icon="Home" />
                        </li>
                        <li className="mr-10">
                            <Button
                                title="Transaction"
                                href="/transactions"
                                style="col-icon"
                                icon="Clipboard"
                            />
                        </li>
                        <li className="mr-10">
                            <Button
                                title="Cart"
                                href="/carts"
                                style="col-icon"
                                icon="ShoppingCart"
                            />
                        </li>
                        <li>
                            <Button title="Profil" href="/Profile" style="col-icon" icon="User" />
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
