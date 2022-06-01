import React, { Fragment, useRef, useState } from 'react';
import { BaseDialog } from '@/Components';

const OrderDialog = ({ isOrderDialogOpen, setOrderDialogOpen }) => {
    return (
        <BaseDialog isBaseDialogOpen={isOrderDialogOpen} setBaseDialogOpen={setOrderDialogOpen}>
            <BaseDialog.Title>title modal</BaseDialog.Title>
            <BaseDialog.Content>
                <p>content</p>
                <p>content two</p>
            </BaseDialog.Content>
            <BaseDialog.Button>
                <button
                    type="button"
                    className="w-full justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                    Got it, thanks!
                </button>
            </BaseDialog.Button>
        </BaseDialog>
    );
};

export default OrderDialog;
