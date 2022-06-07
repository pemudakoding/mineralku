import React from 'react';
import { useForm } from '@inertiajs/inertia-react';
import { BaseDialog, Input, Radio, Select } from '@/Components';

const OrderDialog = ({ isOrderDialogOpen, setOrderDialogOpen, depots }) => {
    const {data, setData, post, processing, errors} = useForm({
        depots_id: "",
        quantity: 1,
        name: "",
        whatsapp_numbers: "",
        address: "",
        shipping_delivery: "delivery",
        is_delivery_now: true
    });

    function handleSubmit(e) {
        e.preventDefault();
        post('/order');
    }

    return (
        <BaseDialog isBaseDialogOpen={isOrderDialogOpen} setBaseDialogOpen={setOrderDialogOpen}>
            <BaseDialog.Title>Buat Pesanan</BaseDialog.Title>
            <BaseDialog.Content>
                <form onSubmit={handleSubmit} id="order">
                    <div className="inline-block bg-blue-default-200 mb-4 text-xs font-semibold rounded-md text-white py-1 px-2">
                        Detail Pesanan
                    </div>
                    <div className="relative flex items-center mb-2">
                        <Select style='input-icon' icon="Droplet" onChange={e => setData('depots_id', e.target.value)} value={data.depots_id}>
                            <option value="">Pilih Depot</option>
                            {depots.map( depot => <option value={depot.id}>{depot.name}</option> )}
                        </Select>
                    </div>
                    <div className="relative flex items-center mb-2">
                        <Input style="input-icon" icon="Hash" placeholder="Jumlah Pesanan" onChange={e => setData('quantity', e.target.value)} value={data.quantity}/>
                    </div>
                    <div className="relative flex items-center mb-2">
                        <Input style="input-icon" icon="User" placeholder="Nama" onChange={e => setData('name', e.target.value)} value={data.name}/>
                    </div>
                    <div className="relative flex items-center mb-2">
                        <Input style="input-icon" icon="MessageSquare" placeholder="Nomor WhatsApp" onChange={e => setData('whatsapp_numbers', e.target.value)} value={data.whatsapp_numbers}/>
                    </div>
                    <div className="relative flex items-center mb-2">
                        <Input style="input-icon" icon="MapPin" placeholder="Alamat Lengkap" onChange={e => setData('address', e.target.value)} value={data.address} />
                    </div>
                    <div className="inline-block bg-blue-default-200 my-4 text-xs font-semibold rounded-md text-white py-1 px-2">
                        Pengiriman
                    </div>
                    <div className="relative flex items-center mb-2">
                        <Radio title="Antar Ke Alamat Saya" name="shipping_delivery" value="delivery" onChange={e => setData('shipping_delivery', e.target.value)} checked />
                    </div>
                    <div className="relative flex items-center mb-2">
                        <Radio title="Ambil Sendiri" name="shipping_delivery" value="pickup" onChange={e => setData('shipping_delivery', e.target.value)}/>
                    </div>
                    <div className="inline-block bg-blue-default-200 my-4 text-xs font-semibold rounded-md text-white py-1 px-2">
                        Jadwal Pengantaran
                    </div>
                    <div className="relative flex items-center mb-2">
                        <Radio title="Antar sekarang" name="is_delivery_now" value="1" onChange={e => setData('is_delivery_now', e.target.value)} checked />
                    </div>
                    <div className="relative flex items-center mb-2">
                        <Radio title="Atur Jadwal" name="is_delivery_now" value="0" onChange={e => setData('is_delivery_now', e.target.value)}/>
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
                </form>
            </BaseDialog.Content>
            <BaseDialog.Button>
                <button
                    type="submit"
                    className="w-full justify-center rounded-md border bg-blue-default-200 shadow-sm px-4 py-2 text-base font-medium text-white hover:bg-gray-50 hover:text-blue-default-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-default-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    disabled={processing}
                    form="order"
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
