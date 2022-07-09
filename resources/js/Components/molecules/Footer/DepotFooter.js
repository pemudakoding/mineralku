import React from 'react';
import { Button } from '@/Components';

const DepotFooter = (props) => {
    return (
        <footer className="footer-wrapper z-50 bg-white fixed w-full bottom-0 py-3 shadow-2xl">
            <div className="nav-wrapper container mx-auto">
                <nav>
                    <ul className="flex justify-center">
                        <li>
                            <Button title="Logout" href="depot/auth/logout" method='POST' style="col-icon" icon="LogOut" />
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default DepotFooter;
