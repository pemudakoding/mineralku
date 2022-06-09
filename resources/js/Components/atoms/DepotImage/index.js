import React from 'react';
import './index.sass';
import { Icon } from '@/Components';

const DepotImage = ({ verified }) => {
    return (
        <div className="depot-detail-image relative">
            <img
                src="https://www.nirvanafilter.id/wp-content/uploads/2020/11/120320658_4554699881269368_6051160098890435868_n.jpg"
                alt=""
                className="rounded-full object-cover border-4 border-blue-default-200"
            />

            {verified && (
                <div className="verified-badge absolute bottom-1.5 right-1.5">
                    <div className="wrapper-icon rounded-full bg-white text-blue-default-100 p-1 text-sm">
                        <Icon icon="Check" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default DepotImage;
