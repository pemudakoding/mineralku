import React, { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const BaseDialog = ({ children, isBaseDialogOpen, setBaseDialogOpen }) => {
    const cancelButtonRef = useRef(null);

    return (
        <Transition appear show={isBaseDialogOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50 w-full h-full" onClose={setBaseDialogOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 backdrop-blur-sm bg-black/30" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

BaseDialog.Title = (props) => (
    <Dialog.Title as="h3" className="text-lg px-6 pt-6 font-medium leading-6 text-gray-900">
        {props.children}
    </Dialog.Title>
);
BaseDialog.Content = (props) => <div className="mt-2 px-6 pb-6">{props.children}</div>;
BaseDialog.Button = (props) => (
    <div className="bg-gray-100 px-6 py-4 sm:flex sm:flex-row-reverse">{props.children}</div>
);

export default BaseDialog;
