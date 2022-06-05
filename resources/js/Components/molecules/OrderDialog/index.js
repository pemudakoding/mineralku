import React, { Fragment, useRef, useState } from 'react';
import { BaseDialog, Input, Radio } from '@/Components';

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
                    <Radio title="Antar Ke Alamat Saya" name="antar" value="1" checked />
                </div>
                <div className="relative flex items-center mb-2">
                    <Radio title="Ambil Sendiri" name="antar" value="0" />
                </div>
                <div className="inline-block bg-blue-default-200 my-4 text-xs font-semibold rounded-md text-white py-1 px-2">
                    Jadwal Pengantaran
                </div>
                <div className="relative flex items-center mb-2">
                    <Radio title="Antar sekarang" name="pengantaran" value="1" checked />
                </div>
                <div className="relative flex items-center mb-2">
                    <Radio title="Atur Jadwal" name="pengantaran" value="0" />
                </div>
                <div className="inline-block bg-blue-default-200 my-4 text-xs font-semibold rounded-md text-white py-1 px-2">
                    Total Pembayaran
                </div>
                <div className="flex flex-wrap items-center justify-between mb-4">
                    <div className="text-blue-default-200 text-sm text-gray-600 font-medium w-2/3 mb-2">
                        Sub Total Untuk Produk
                    </div>
                    <div className="text-blue-default-200 text-right text-sm text-gray-600 font-medium w-1/3 mb-2">
                        Rp 5.000
                    </div>
                    <div className="text-blue-default-200 text-sm text-gray-600 font-medium w-2/3 mb-2">
                        Sub Total Untuk Pengiriman
                    </div>
                    <div className="text-blue-default-200 text-right text-sm text-gray-600 font-medium w-1/3 mb-2">
                        Rp 1.000
                    </div>
                    <div className="text-blue-default-200 text-sm text-gray-600 font-medium w-2/3 mb-2">
                        Service Fee (10%)
                    </div>
                    <div className="text-blue-default-200 text-right text-sm text-gray-600 font-medium w-1/3 mb-2">
                        Rp. 600
                    </div>
                </div>
                <div className="mx-6 mb-4 border-2 border-gray-500 rounded-lg px-3 py-2">
                    <p className="font-medium text-xs text-gray-500 leading-3 m-0">
                        Service Free membantu kami meningkatkan kualitas layanan untuk Anda.
                    </p>
                </div>
                <div className="flex flex-wrap items-center justify-between">
                    <div className="text-blue-default-200 text-xl text-gray-600 font-medium w-2/3">
                        Total
                    </div>
                    <div className="text-blue-default-200 text-right text-xl text-gray-600 font-medium w-1/3">
                        Rp 6.600
                    </div>
                </div>
            </BaseDialog.Content>
            <BaseDialog.Button>
                <button
                    type="button"
                    className="w-full justify-center rounded-md border bg-blue-default-200 shadow-sm px-4 py-2 text-base font-medium text-white hover:bg-gray-50 hover:text-blue-default-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-default-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                    Pesan Sekarang
                </button>
                <button
                    type="button"
                    className="w-full justify-center rounded-md border bg-gray-50 shadow-sm px-4 py-2 text-base font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 mt-3 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOrderDialogOpen(false)}
                >
                    Batal
                </button>
            </BaseDialog.Button>
        </BaseDialog>
    );
};

export default OrderDialog;
