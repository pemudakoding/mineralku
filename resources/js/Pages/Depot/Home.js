import React from 'react';
import { Icon } from '@/Components';

const Home = () => {
    return (
        <div className="mineralku-app bg-blue-default-50 min-h-screen">
            <div className="md:w-6/12 w-10/12 mx-auto">
                <main className="container py-10">
                    <div className="profile flex items-center flex-col poppins my-10">
                        <h3 className="text-black text-xl font-semibold">
                            Selamat Bekerja, Depot Air Afiqah
                        </h3>
                        <div className="address bg-green-300 font-medium w-fit p-2 rounded mt-4 ">
                            <p className="text-xs">Jl Dayodara, Palu, Sulawesi Tengah</p>
                        </div>
                    </div>
                    <div className="statistics my-10">
                        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                            <div className="card-income bg-white p-4 shadow rounded-lg poppins">
                                <div className="card-title text-slate-400 font-normal">
                                    Total Pendapatan
                                </div>
                                <div className="card-body mt-4">
                                    <p className="text-2xl font-medium text-gray-600">Rp. 10000</p>
                                </div>
                            </div>
                            <div className="card-income bg-white p-4 shadow rounded-lg poppins">
                                <div className="card-title font-normal text-gray-400">
                                    Total Transaksi
                                </div>
                                <div className="card-body mt-4">
                                    <p className="text-2xl font-medium text-gray-600">14</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col poppins py-10">
                        <h2 className="text-2xl font-medium text-slate-600 mb-4">Pesanan Kamu</h2>
                        <div className="flex items-center overflow-x-auto mb-4">
                            <button className="bg-green-300 rounded whitespace-nowrap py-1 px-2 mr-2 text-slate-600 font-medium text-sm focus:outline-none">
                                Semua
                            </button>
                            <button className="bg-slate-100 rounded whitespace-nowrap py-1 px-2 mr-2 text-slate-500 font-medium text-sm focus:outline-none">
                                Pesanan Baru
                            </button>
                            <button className="bg-slate-100 rounded whitespace-nowrap py-1 px-2 mr-2 text-slate-500 font-medium text-sm focus:outline-none">
                                Diproses
                            </button>
                            <button className="bg-slate-100 rounded whitespace-nowrap py-1 px-2 mr-2 text-slate-500 font-medium text-sm focus:outline-none">
                                Dikirim
                            </button>
                            <button className="bg-slate-100 rounded whitespace-nowrap py-1 px-2 mr-2 text-slate-500 font-medium text-sm focus:outline-none">
                                Selesai
                            </button>
                        </div>
                        <div className="flex flex-col bg-white rounded-lg p-4 shadow text-slate-600 mb-4">
                            <h3 className="text-xl font-semibold text-slate-600 mb-0">Fulan</h3>
                            <p className="flex items-center font-normal text-xs mb-2">
                                <Icon icon="MapPin" size="15" />
                                <span className="ml-1 italic">
                                    Jl. Dayo Dara, Palu, Sulawesi Tengah
                                </span>
                            </p>
                            <p className="text-sm font-medium mb-1">
                                Pesanan #MINKU-0101200402301203
                            </p>
                            <h3 className="text-xl font-semibold text-slate-600 mb-1">
                                Isi Galon Bio Hexagonal
                            </h3>
                            <p className="text-sm font-medium mb-1">Rp. 5000 X 4</p>
                            <p className="text-sm font-semibold mb-3">Total Pesanan: Rp. 20.000</p>
                            <div className="flex items-center">
                                <button className="bg-slate-100 rounded whitespace-nowrap py-1 px-2 mr-2 text-slate-500 font-semibold text-sm focus:outline-none">
                                    Proses
                                </button>
                                <button className="bg-green-300 rounded whitespace-nowrap py-1 px-2 mr-2 text-slate-600 font-semibold text-sm focus:outline-none">
                                    Kirim
                                </button>
                                <button className="bg-green-300 rounded whitespace-nowrap py-1 px-2 mr-2 text-slate-600 font-semibold text-sm focus:outline-none">
                                    Selesai
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Home;
