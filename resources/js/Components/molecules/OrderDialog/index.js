import React, { Fragment, useRef, useState } from 'react';
import { BaseDialog, Input, Checkbox } from '@/Components';

const OrderDialog = ({ isOrderDialogOpen, setOrderDialogOpen }) => {
    return (
        <BaseDialog isBaseDialogOpen={isOrderDialogOpen} setBaseDialogOpen={setOrderDialogOpen}>
            <BaseDialog.Title>Buat Pesanan</BaseDialog.Title>
            <BaseDialog.Content>
                <div className="inline-block bg-blue-default-200 mb-4 text-xs font-semibold rounded-md text-white py-1 px-2">
                    Detail Pesanan
                </div>
                <div className="relative flex items-center mb-2">
                    <Input style="input-icon" icon="Camera" placeholder="Pilih Depot" />
                </div>
                <div className="relative flex items-center mb-2">
                    <Input style="input-icon" icon="Camera" placeholder="Jumlah Pesanan" />
                </div>
                <div className="relative flex items-center mb-2">
                    <Input style="input-icon" icon="Camera" placeholder="Nama" />
                </div>
                <div className="relative flex items-center mb-2">
                    <Input style="input-icon" icon="Camera" placeholder="Nomor WhatsApp" />
                </div>
                <div className="relative flex items-center mb-2">
                    <Input style="input-icon" icon="Camera" placeholder="Alamat Lengkap" />
                </div>
                <div className="inline-block bg-blue-default-200 my-4 text-xs font-semibold rounded-md text-white py-1 px-2">
                    Pengiriman
                </div>
                <div className="relative flex items-center mb-2">
                    <Checkbox title="Antar Ke Alamat Saya" checked />
                </div>
                <div className="relative flex items-center mb-2">
                    <Checkbox title="Ambil Sendiri" />
                </div>
                <div className="inline-block bg-blue-default-200 my-4 text-xs font-semibold rounded-md text-white py-1 px-2">
                    Jadwal Pengantaran
                </div>
                <div className="relative flex items-center mb-2">
                    <Checkbox title="Antar sekarang" checked />
                </div>
                <div className="relative flex items-center mb-2">
                    <Checkbox title="Atur Jadwal" />
                </div>
                <div className="inline-block bg-blue-default-200 my-4 text-xs font-semibold rounded-md text-white py-1 px-2">
                    Total Pembayaran
                </div>
                <div className="flex flex-wrap items-center justify-between">
                    <div className="bg-blue-200 text-sm text-gray-600 font-medium w-2/3 mb-2">
                        Sub Total Untuk Produk
                    </div>
                    <div className="bg-red-200 text-right text-sm text-gray-600 font-medium w-1/3 mb-2">
                        Rp 5.000
                    </div>
                    <div className="bg-blue-200 text-sm text-gray-600 font-medium w-2/3 mb-2">
                        Sub Total Untuk Pengiriman
                    </div>
                    <div className="bg-red-200 text-right text-sm text-gray-600 font-medium w-1/3 mb-2">
                        Rp 1.000
                    </div>
                    <div className="bg-blue-200 text-sm text-gray-600 font-medium w-2/3 mb-2">
                        Service Fee (10%)
                    </div>
                    <div className="bg-red-200 text-right text-sm text-gray-600 font-medium w-1/3 mb-2">
                        Rp. 600
                    </div>
                </div>
                <div className="mx-6 mb-2 border-2 border-gray-500 rounded-lg px-3 py-2">
                    <p className="font-medium text-xs text-gray-500 leading-3">
                        Service Free membantu kami meningkatkan kualitas layanan untuk Anda.
                    </p>
                </div>
                <div className="flex flex-wrap items-center justify-between">
                    <div className="bg-blue-200 text-xl text-gray-600 font-medium w-2/3 mb-2">
                        Total
                    </div>
                    <div className="bg-red-200 text-right text-xl text-gray-600 font-medium w-1/3 mb-2">
                        Rp 6.600
                    </div>
                </div>
            </BaseDialog.Content>
            <BaseDialog.Button>
                <button
                    type="button"
                    className="w-full justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                    Pesan Sekarang
                </button>
            </BaseDialog.Button>
        </BaseDialog>
    );
};

export default OrderDialog;
