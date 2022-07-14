import React, {useEffect} from 'react';
import { Icon, Button, Footer } from '@/Components';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react'

const Home = ({ depot, order_total, revenue_total, orders}) => {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    const limit = {
        limit: parseInt((searchParams.get('limit') ?? 5)) + 5
    };
    const { flash } = usePage().props

    function updateStatus(element,status,order_id) {
        Inertia.patch(
            '/depot/orders/status',
            {status,order_id}
        );
    }

    if(flash.message) {
        alert(flash.message);
    }

    return (
        <div className="mineralku-app bg-blue-default-50 min-h-screen">
            <div className="md:w-6/12 w-10/12 mx-auto">
                <main className="container py-10">
                    <div className="profile flex items-center flex-col poppins my-10">
                        <h3 className="text-black text-xl font-semibold">
                            Selamat Bekerja, Depot { depot.name }
                        </h3>
                        <div className="address bg-green-300 font-medium w-fit p-2 rounded mt-4 ">
                            <p className="text-xs">
                                {depot.address}, {" "}
                                {depot.urban_village.name}, {" "}
                                {depot.sub_district.name}, {" "}
                                {depot.district.name}, {" "}
                                {depot.province.name}. {" "}
                            </p>
                        </div>
                    </div>
                    <div className="statistics my-10">
                        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                            <div className="card-income bg-white p-4 shadow rounded-lg poppins">
                                <div className="card-title text-slate-400 font-normal">
                                    Total Pendapatan
                                </div>
                                <div className="card-body mt-4">
                                    <p className="text-2xl font-medium text-gray-600">Rp. {revenue_total.toLocaleString(navigator.language)}</p>
                                </div>
                            </div>
                            <div className="card-income bg-white p-4 shadow rounded-lg poppins">
                                <div className="card-title font-normal text-gray-400">
                                    Total Transaksi
                                </div>
                                <div className="card-body mt-4">
                                    <p className="text-2xl font-medium text-gray-600">{order_total}</p>
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
                        {
                            orders.map((order) => (
                                <div key={order.id} className="flex flex-col bg-white rounded-lg p-4 shadow text-slate-600 mb-4">
                                    <h3 className="text-xl font-semibold text-slate-600 mb-0">{order.user.name}</h3>
                                    <p className="flex items-center font-normal text-xs mb-2">
                                        <Icon icon="MapPin" size="15" />
                                        <span className="ml-1 italic">
                                            {order.delivery_address}
                                        </span>
                                    </p>
                                    <p className="text-sm font-medium mb-1 mt-8">
                                        Pesanan #{order.order_number}
                                    </p>
                                    <h3 className="text-xl font-semibold text-slate-600 mb-1">
                                        Isi Galon {order.product.name}
                                    </h3>
                                    <p className="text-sm font-medium mb-1">Rp. 5000 X {order.quantity}</p>
                                    <p className="text-sm font-semibold mb-3">Total Pesanan: Rp. {order.total_price.toLocaleString()}</p>
                                    <div className="grid grid-cols-1 md:grid-cols-3">
                                        { order.status == 'processing' || order.status == 'sending' || order.status == 'completed'
                                            ?  (
                                                <p className="bg-slate-100 flex justify-center items-center rounded-full whitespace-nowrap py-2 mb-4 md:mb-0 px-2 mr-2 text-slate-500 font-semibold text-sm focus:outline-none">
                                                    Proses
                                                </p>)
                                            : (
                                                <Button
                                                    title='Proses'
                                                    className='bg-green-300 whitespace-nowrap py-2 mb-4 md:mb-0 px-2 mr-2 text-slate-600 font-semibold text-sm focus:outline-none text-center'
                                                    onClick={(e) => updateStatus(e, 'processing', order.id)}
                                                />
                                                )
                                        }
                                        { order.status == 'sending' || order.status == 'pending' || order.status == 'completed'
                                            ?  (
                                                <p className="bg-slate-100 flex justify-center items-center rounded-full whitespace-nowrap py-2 mb-4 md:mb-0 px-2 mr-2 text-slate-500 font-semibold text-sm focus:outline-none">
                                                    Kirim
                                                </p>)
                                            : (
                                                <Button
                                                    title='Kirim'
                                                    className='bg-green-300 whitespace-nowrap py-2 mb-4 md:mb-0 px-2 mr-2 text-slate-600 font-semibold text-sm focus:outline-none text-center'
                                                    onClick={(e) => updateStatus(e, 'sending', order.id)}
                                                />
                                                )
                                        }

                                        { order.status == 'completed' || order.status == 'pending' ||  order.status == 'processing'
                                            ?  (
                                                <p className="bg-slate-100 flex justify-center items-center rounded-full whitespace-nowrap py-2 mb-4 md:mb-0 px-2 mr-2 text-slate-500 font-semibold text-sm focus:outline-none">
                                                    Selesai
                                                </p>)
                                            : (
                                                <Button
                                                    title='Selesai'
                                                    className='bg-green-300 whitespace-nowrap py-2 mb-4 md:mb-0 px-2 mr-2 text-slate-600 font-semibold text-sm focus:outline-none text-center'
                                                    onClick={(e) => updateStatus(e, 'completed', order.id)}
                                                />
                                                )
                                        }
                                    </div>
                                </div>
                            ))
                        }
                        <div className="flex items-center overflow-x-auto mb-4">
                            <Button title='Load More' method='get' href='/depot' data={limit} preserveScroll/>
                        </div>
                    </div>
                </main>
            </div>
            <Footer type="depot"/>
        </div>
    );
};

export default Home;
