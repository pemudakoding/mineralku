import React, { useState } from 'react';
import { useForm, usePage } from '@inertiajs/inertia-react';
import { BaseDialog, Input, Radio, Select, Icon, ValidationErrors } from '@/Components';

const OrderDialog = ({ isOrderDialogOpen, setOrderDialogOpen, depots }) => {
    const [status, setStatus] = useState('pending');
    const { data, setData, post, processing, errors } = useForm({
        depot_id: '',
        quantity: 1,
        name: '',
        whatsapp_numbers: '',
        address: '',
        shipping_detail: 'delivery',
        is_delivery_now: false,
        delivery_time: '00:00',
        delivery_date: new Date().toLocaleDateString(),
    });

    function handleSubmit(e) {
        e.preventDefault();

        post('/order', {
            onSuccess: () => handleOnSuccess(),
        });
    }

    function handleOnSuccess() {
        setStatus('success');
    }

    let addressClass = '';
    const [address, setAddress] = useState(true);
    const addressHandler = (address) => {
        setAddress(address);
    };
    if (address === false) {
        addressClass = 'hidden';
    }

    let dateClass = '';
    const [date, setDate] = useState(false);
    const dateHandler = (date) => {
        setDate(date);
    };

    if (date === true || address === false) {
        dateClass = 'hidden';
    }

    const { defaultPrice, shippingFee, serviceFee } = usePage().props;
    const totalPriceProduct = defaultPrice * data.quantity;
    const shippingCost = address ? (shippingFee * data.quantity) : 0;
    const totalPrice = totalPriceProduct + shippingCost + serviceFee;

    return (
        <BaseDialog isBaseDialogOpen={isOrderDialogOpen} setBaseDialogOpen={setOrderDialogOpen}>
            <BaseDialog.Title>
                {status == 'pending' && 'Buat Pesanan'}
                {status == 'success' && 'Sukses'}
            </BaseDialog.Title>
            <BaseDialog.Content>
                <ValidationErrors errors={errors} />
                {status == 'pending' && (
                    <form onSubmit={handleSubmit} id="order">
                        <div className="inline-block bg-blue-default-200 mb-4 text-xs font-semibold rounded-md text-white py-1 px-2">
                            Detail Pesanan
                        </div>
                        <div className="relative flex items-center mb-2">
                            <Select
                                style="input-icon"
                                icon="Droplet"
                                onChange={(e) => setData('depot_id', e.target.value)}
                                value={data.depot_id}
                            >
                                <option value="">Pilih Depot</option>
                                {depots.map((depot) => (
                                    <option value={depot.id}>{depot.name}</option>
                                ))}
                            </Select>
                        </div>
                        <div className="relative flex items-center mb-2">
                            <Input
                                type="number"
                                style="input-icon"
                                icon="Hash"
                                placeholder="Jumlah Pesanan"
                                onChange={(e) => setData('quantity', e.target.value)}
                                value={data.quantity}
                            />
                        </div>
                        <div className="relative flex items-center mb-2">
                            <Input
                                style="input-icon"
                                icon="User"
                                placeholder="Nama"
                                onChange={(e) => setData('name', e.target.value)}
                                value={data.name}
                            />
                        </div>
                        <div className="relative flex items-center mb-2">
                            <Input
                                style="input-icon"
                                icon="MessageSquare"
                                placeholder="Nomor WhatsApp"
                                onChange={(e) => setData('whatsapp_numbers', e.target.value)}
                                value={data.whatsapp_numbers}
                            />
                        </div>
                        <div className={`relative flex items-center mb-2 ` + addressClass}>
                            <Input
                                style="input-icon"
                                icon="MapPin"
                                placeholder="Alamat Lengkap"
                                onChange={(e) => setData('address', e.target.value)}
                                value={data.address}
                            />
                        </div>
                        <div className="inline-block bg-blue-default-200 my-4 text-xs font-semibold rounded-md text-white py-1 px-2">
                            Pengiriman
                        </div>
                        <div className="relative flex items-center mb-2">
                            <Radio
                                title="Antar Ke Alamat Saya"
                                name="send"
                                value="delivery"
                                onClick={(e) => addressHandler(true)}
                                onChange={(e) => setData('shipping_detail', e.target.value)}
                                checked={address === true}
                            />
                        </div>
                        <div className="relative flex items-center mb-2">
                            <Radio
                                title="Ambil Sendiri"
                                name="send"
                                value="pickup"
                                onClick={(e) => addressHandler(false)}
                                onChange={(e) => setData('shipping_detail', e.target.value)}
                                checked={address === false}
                            />
                        </div>
                        <div className={`w-full ` + addressClass}>
                            <div className="inline-block bg-blue-default-200 my-4 text-xs font-semibold rounded-md text-white py-1 px-2">
                                Jadwal Pengantaran
                            </div>
                            <div className="relative flex items-center mb-2">
                                <Radio
                                    title="Antar sekarang"
                                    name="is_delivery_now"
                                    value="1"
                                    onClick={(e) => dateHandler(true)}
                                    onChange={(e) => setData('is_delivery_now', e.target.value)}
                                    checked={date === true}
                                />
                            </div>
                            <div className="relative flex items-center mb-2">
                                <Radio
                                    title="Atur Jadwal"
                                    name="is_delivery_now"
                                    value="0"
                                    onClick={(e) => dateHandler(false)}
                                    onChange={(e) => setData('is_delivery_now', e.target.value)}
                                    checked={date === false}
                                />
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-2 gap-4 my-4">
                            <div className={`relative flex items-center mb-2 ` + dateClass}>
                                <Input
                                    type="date"
                                    style="input-icon"
                                    icon="Calendar"
                                    placeholder="Tanggal Pengiriman"
                                    onChange={(e) => setData('delivery_date', e.target.value)}
                                    value={data.date}
                                />
                            </div>
                            <div className={`relative flex items-center mb-2 ` + dateClass}>
                                <Input
                                    type="time"
                                    style="input-icon"
                                    icon="Clock"
                                    placeholder="Jam Pengiriman"
                                    onChange={(e) => setData('delivery_time', e.target.value)}
                                    value={data.date}
                                />
                            </div>
                        </div>
                        <div className="inline-block bg-blue-default-200 my-4 text-xs font-semibold rounded-md text-white py-1 px-2">
                            Total Pembayaran
                        </div>
                        <div className="flex flex-wrap items-center justify-between mb-4">
                            <div className="text-blue-default-200 text-sm text-gray-600 font-medium w-2/3 mb-2">
                                Sub Total Untuk Produk
                            </div>
                            <div className="text-blue-default-200 text-right text-sm text-gray-600 font-medium w-1/3 mb-2">
                                Rp {totalPriceProduct}
                            </div>
                            <div className="text-blue-default-200 text-sm text-gray-600 font-medium w-2/3 mb-2">
                                Sub Total Untuk Pengiriman
                            </div>
                            <div className="text-blue-default-200 text-right text-sm text-gray-600 font-medium w-1/3 mb-2">
                                Rp {shippingCost}
                            </div>
                            <div className="text-blue-default-200 text-sm text-gray-600 font-medium w-2/3 mb-2">
                                Service Fee
                            </div>
                            <div className="text-blue-default-200 text-right text-sm text-gray-600 font-medium w-1/3 mb-2">
                                Rp. {serviceFee}
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
                                Rp {totalPrice}
                            </div>
                        </div>
                    </form>
                )}
                {status == 'success' && (
                    <div className="flex flex-col items-center py-10 text-green-300">
                        <Icon icon="CheckCircle" size={48} />
                        <p className="text-gray-600 text-center mt-4">
                            Orderan kamu sukses dibuat, Pihak kami akan menghubungi kamu melalui
                            Whatsapp
                        </p>
                    </div>
                )}
            </BaseDialog.Content>
            <BaseDialog.Button>
                {status == 'pending' && (
                    <>
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
                    </>
                )}
                {status == 'success' && (
                    <button
                        type="button"
                        className="w-full justify-center rounded-md border bg-gray-50 shadow-sm px-4 py-2 text-base font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 mt-3 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setOrderDialogOpen(false)}
                    >
                        Tutup
                    </button>
                )}
            </BaseDialog.Button>
        </BaseDialog>
    );
};

export default OrderDialog;
