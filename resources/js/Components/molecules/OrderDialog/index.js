import React, { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const OrderDialog = ({ isOrderDialogOpen, setOrderDialogOpen }) => {
    const cancelButtonRef = useRef(null);

    return (
        <Transition appear show={isOrderDialogOpen} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-50 w-full h-full"
                initialFocus={cancelButtonRef}
                onClose={setOrderDialogOpen}
            >
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
                                <div className="p-6">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Modal Dialog Title
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Morbi accumsan condimentum justo a tincidunt. Aliquam
                                            nibh velit, imperdiet et nunc tincidunt, rutrum dictum
                                            nibh. Maecenas sapien ante, dignissim id dui sed,
                                            commodo sodales nunc.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gray-100 px-6 py-4 sm:flex sm:flex-row-reverse">
                                    <button
                                        type="button"
                                        className="w-full justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={() => setOrderDialogOpen(false)}
                                        ref={cancelButtonRef}
                                    >
                                        Got it, thanks!
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default OrderDialog;
