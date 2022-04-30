import React from 'react';
import {setLayout} from '@/utils/Layout';
import {
    Button,
    HeroSection,
    Reason
} from '@/components'
import {IMG_JOIN} from '@/assets/images'

const Home = (props) => {
    return (
        <>
            <HeroSection className="text-center">
                <h1 className='fredoka-one text-white text-4xl'>Selamat Datang!</h1>
                <p className="text-white text-center mt-4 poppins">
                    Yuk! cukupi kebutuhanmu <br/>
                    air galonmu di Mineralku
                </p>
                <section className="button-section mt-8 mb-10 flex flex-col items-center md:block ">
                    <Button href='/register' title='Daftar' style="primary" className='md:mr-3 md:mb-0 mb-3'/>
                    <Button href='/login' title='Masuk' style="primary-outline"/>
                </section>
            </HeroSection>

            <main className='section-container bg-blue-default-50 pt-20 pb-40'>
                <div className="section-wrapper md:w-6/12 w-10/12 mx-auto">
                    <section className="about-section mb-20">
                        <p className='poppins text-center text-black'>
                            Mineralku adalah platform pesan antar air minum secara online
                            yang dapat membantu kamu memesan air minum isi ulang secara cepat, mudah dan aman
                        </p>
                    </section>
                    <section className="reason-section mb-20">
                        <div className="container">
                            <div className="reason-title mb-10">
                                <h3 className='font-medium fredoka-one text-black text-3xl text-center'>Kenapa Harus Mineralku?</h3>
                            </div>
                            <div className="reason-content">
                                <Reason
                                    title="1. Telah Tersertifikasi Oleh Dinas Kesehatan"
                                    desc='Para Mitra Depot air minum di Mineralku telah tersertifikasi oleh Dinas Kesehatan setempat, sehingga
                                        para pengguna tidak perlu khawatir saat memesan air minum isi ulang di Mineralku.'
                                    />

                                <Reason
                                    title="2. Tracking Pesanan"
                                    desc='Terdapat fitur tracking pesanan dapat memudahkan
                                        pengguna ketika melihat status pesanan.'
                                    onRight/>

                                <Reason
                                    title="3. Rekomendasi Depot Air Minum Terdekat"
                                    desc='Memberikan rekomendasi depot air minum terdekat, yang dapat memudahkan
                                        pengguna untuk mencari pengganti ketika depot langganan sedang tutup.'
                                    />

                                <Reason
                                    title="4. Pemesanan Terjadwal"
                                    desc='Dapat melakukan penjadwalan sehingga memudahkan pengguna untuk melakukan
                                        pemesanan air berulang, mengantisipasi Air Galon habis diwaktu yang tidak tepat.'
                                    onRight/>

                                <Reason
                                    title="5. Voucher Gratis Ongkir & Promo"
                                    desc='Terdapat banyak promo berupa gratis ongkir ataupun promo lainnya
                                        seperti beli 5 gratis 1.'
                                    />


                                <Reason
                                    title="6. Berlangganan"
                                    desc='Bisa berlangganan di Depot pilihan kamu, yang dapat memudahkan kamu
                                        dalam mengatur jadwal diwaktu yang dapat kalian sesuaikan.'
                                    onRight
                                    />

                            </div>
                        </div>
                    </section>
                    <section className="join-section">
                        <div className="container">
                            <div className="join-title mb-10">
                                <h3 className='font-medium fredoka-one text-black text-3xl mb-4 text-center'>Kamu punya usaha depot air minum?</h3>
                                <img src={IMG_JOIN} alt="Join image" className='w-5/12 mx-auto mb-4'/>
                                <h3 className='font-medium fredoka-one text-black text-3xl mb-4 text-center'>Yuk! gabung jadi mitra di Mineralku</h3>
                            </div>
                            <div className="text-center">
                                <Button href='/register' title='Gabung Sekarang' style="primary"/>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

setLayout(Home);

export default Home;
