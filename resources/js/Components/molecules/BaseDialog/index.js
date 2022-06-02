import React, { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const BaseDialog = ({ children, isBaseDialogOpen, setBaseDialogOpen }) => {
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
                    <div className="poppins flex min-h-full items-center justify-center p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white shadow-xl transition-all">
                                <div className="p-6">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-2xl text-center text-blue-default-200 font-bold leading-6 text-gray-900"
                                    >
                                        {children[0]}
                                    </Dialog.Title>
                                    <div className="mt-6">{children[1]}</div>
                                </div>
                                <div className="bg-gray-100 px-6 py-4 sm:flex sm:flex-row-reverse">
                                    {children[2]}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

BaseDialog.Title = (props) => props.children;
BaseDialog.Content = (props) => props.children;
BaseDialog.Button = (props) => props.children;

export default BaseDialog;
