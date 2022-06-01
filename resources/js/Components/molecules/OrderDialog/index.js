import React, { Fragment, useRef, useState } from 'react';
import { BaseDialog } from '@/Components';

const OrderDialog = ({ isOrderDialogOpen, setOrderDialogOpen }) => {
    return (
        <BaseDialog isBaseDialogOpen={isOrderDialogOpen} setBaseDialogOpen={setOrderDialogOpen} />
    );
};

export default OrderDialog;
