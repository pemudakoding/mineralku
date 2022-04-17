import React from 'react';
import {setLayout} from '@/utils/Layout';
import {Button, HeroSection} from '@/components'
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
        </>
    )
}

setLayout(Home);

export default Home;
