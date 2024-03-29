import React, { useState } from 'react';
import { setLayout } from '@/Utils/Layout';
import { Button, HeroSection, Reason, OrderDialog } from '@/Components';
import {
    IMG_JOIN,
    IMG_TERSERTIFIKASI,
    IMG_HERO,
    IMG_JADWAL,
    IMG_LANGGANAN,
    IMG_REKOMENDASI,
    IMG_VOUCHER,
    IMG_TRACKING,
} from '@/assets/images';

const openOrderDialog = (setOrderDialogOpen) => {
    setOrderDialogOpen(true);
};

const Home = ({ depots }) => {
    let [isOrderDialogOpen, setOrderDialogOpen] = useState(false);

    return (
        <>
            <OrderDialog
                isOrderDialogOpen={isOrderDialogOpen}
                setOrderDialogOpen={setOrderDialogOpen}
                depots={depots}
            />
            <HeroSection className="text-center">
                <h1 className="fredoka-one text-white text-4xl">Selamat Datang!</h1>
                <p className="text-white text-center mt-4 poppins">
                    Yuk! cukupi kebutuhan <br />
                    air galonmu di Mineralku
                </p>
                <section className="button-section mt-8 mb-8 flex flex-col items-center md:block ">
                    <Button
                        title="Pesan Sekarang"
                        style="primary"
                        className="md:mr-3 md:mb-0 mb-3"
                        onClick={() => setOrderDialogOpen(true)}
                    />
                </section>
                <div className="w-full h-auto flex justify-center -mb-6">
                    <img src={IMG_HERO} alt="Join image" className="w-1/2 md:w-1/6 mx-auto" />
                </div>
            </HeroSection>
            <main className="relative section-container bg-blue-default-50 pt-20 pb-40">
                <div className="section-wrapper md:w-6/12 w-10/12 mx-auto">
                    <section className="about-section mb-20">
                        <p className="poppins text-center text-black">
                            Mineralku adalah platform pesan antar air minum secara online yang dapat
                            membantu kamu memesan air minum isi ulang secara cepat, mudah dan aman
                        </p>
                    </section>
                    <section className="reason-section mb-20">
                        <div className="container">
                            <div className="reason-title mb-10">
                                <h3 className="font-medium fredoka-one text-black text-3xl text-center">
                                    Kenapa Harus Mineralku?
                                </h3>
                            </div>
                            <div className="reason-content">
                                <div className="w-full flex justify-center flex-col lg:flex-row lg:items-center lg:flex-row-reverse lg:my-14">
                                    <img
                                        src={IMG_TERSERTIFIKASI}
                                        alt="Join image"
                                        className="w-1/4 lg:1/3 h-auto mx-auto mt-10 mb-6 lg:my-0"
                                    />
                                    <Reason
                                        title="1. Telah Tersertifikasi Oleh Dinas Kesehatan"
                                        desc="Para Mitra Depot air minum di Mineralku telah tersertifikasi oleh Dinas Kesehatan setempat, sehingga
                                            para pengguna tidak perlu khawatir saat memesan air minum isi ulang di Mineralku."
                                    />
                                </div>

                                <div className="w-full flex justify-center flex-col lg:flex-row lg:items-center lg:my-14">
                                    <img
                                        src={IMG_TRACKING}
                                        alt="Join image"
                                        className="w-1/4 lg:1/3 h-auto mx-auto mt-10 mb-6 lg:my-0"
                                    />
                                    <Reason
                                        title="2. Tracking Pesanan"
                                        desc="Terdapat fitur tracking pesanan dapat memudahkan
                                            pengguna ketika melihat status pesanan."
                                        onRight
                                    />
                                </div>

                                <div className="w-full flex justify-center flex-col lg:flex-row lg:items-center lg:flex-row-reverse lg:my-14">
                                    <img
                                        src={IMG_REKOMENDASI}
                                        alt="Join image"
                                        className="w-1/4 lg:1/3 h-auto mx-auto mt-10 mb-6 lg:my-0"
                                    />
                                    <Reason
                                        title="3. Rekomendasi Depot Air Minum Terdekat"
                                        desc="Memberikan rekomendasi depot air minum terdekat, yang dapat memudahkan
                                            pengguna untuk mencari pengganti ketika depot langganan sedang tutup."
                                    />
                                </div>

                                <div className="w-full flex justify-center flex-col lg:flex-row lg:items-center lg:my-14">
                                    <img
                                        src={IMG_JADWAL}
                                        alt="Join image"
                                        className="w-1/4 lg:1/3 h-auto mx-auto mt-10 mb-6 lg:my-0"
                                    />
                                    <Reason
                                        title="4. Pemesanan Terjadwal"
                                        desc="Dapat melakukan penjadwalan sehingga memudahkan pengguna untuk melakukan
                                            pemesanan air berulang, mengantisipasi Air Galon habis diwaktu yang tidak tepat."
                                        onRight
                                    />
                                </div>
                                <div className="w-full flex justify-center flex-col lg:flex-row lg:items-center lg:flex-row-reverse lg:my-14">
                                    <img
                                        src={IMG_VOUCHER}
                                        alt="Join image"
                                        className="w-1/4 lg:1/3 h-auto mx-auto mt-10 mb-6 lg:my-0"
                                    />
                                    <Reason
                                        title="5. Voucher Gratis Ongkir & Promo"
                                        desc="Terdapat banyak promo berupa gratis ongkir ataupun promo lainnya
                                            seperti beli 5 gratis 1."
                                    />
                                </div>
                                <div className="w-full flex justify-center flex-col lg:flex-row lg:items-center lg:my-14">
                                    <img
                                        src={IMG_LANGGANAN}
                                        alt="Join image"
                                        className="w-1/4 lg:1/3 h-auto mx-auto mt-10 mb-6 lg:my-0"
                                    />
                                    <Reason
                                        title="6. Berlangganan"
                                        desc="Bisa berlangganan di Depot pilihan kamu, yang dapat memudahkan kamu
                                            dalam mengatur jadwal diwaktu yang dapat kalian sesuaikan."
                                        onRight
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="join-section">
                        <div className="container">
                            <div className="join-title mb-10">
                                <h3 className="font-medium fredoka-one text-black text-3xl mb-4 text-center">
                                    Kamu punya usaha depot air minum?
                                </h3>
                                <img
                                    src={IMG_JOIN}
                                    alt="Join image"
                                    className="w-5/12 mx-auto mb-4"
                                />
                                <h3 className="font-medium fredoka-one text-black text-3xl mb-4 text-center">
                                    Yuk! gabung jadi mitra di Mineralku
                                </h3>
                            </div>
                            <div className="text-center">
                                <Button href="https://docs.google.com/forms/d/12mwvBjxq1GdIMyYz6t6Xy53mAe5M6R19YQVgkdOjdII" title="Gabung Sekarang" type='external' style="primary" target="_blank"/>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
};

setLayout(Home);

export default Home;
