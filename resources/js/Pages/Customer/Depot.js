import React from 'react'
import { setLayout } from '@/Utils/Layout'
import {
    HeroSection,
    DepotImage,
    Icon,
    DepotProductCard
} from '@/Components'

const Depot = () => {

    return (
        <>
            <HeroSection>
                <div className="md:w-6/12 w-10/12 mx-auto text-white">
                    <div className="certificate-info  text-center">
                        Depot ini telah tersertifikasi Dinas Kesehatan <br />
                        443.5/567.11/Dinkes/2022
                    </div>
                    <div className="depot-detail mt-14 flex items-center justify-center mb-10">
                        <div className="left-desc mr-8">
                            <DepotImage verified/>
                        </div>
                        <div className="right-desc">
                            <h3 className='fredoka-one text-2xl mb-1'>DEPOT PEMUDA KODING</h3>
                            <h5>Jl. Dayo dara, Palu, Sulawesi Tengah</h5>
                        </div>
                    </div>
                    <div className="depot-desc flex justify-center ">
                        <span className='mr-2'>
                            <Icon icon='Clock'/>
                        </span>
                        Buka sampai 22:00 WITA
                    </div>
                </div>
            </HeroSection>
            <div className="products-wrapper bg-blue-default-50 pt-20 pb-40">
                <div className="md:w-6/12 w-10/12 mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                        <DepotProductCard
                            imageSrc='https://cf.shopee.co.id/file/f365d079bc1e2db366a210d82812a0e6'
                            title='Air RO'
                            price='4000'
                        />
                        <DepotProductCard
                            imageSrc='https://cf.shopee.co.id/file/f365d079bc1e2db366a210d82812a0e6'
                            title='Air RO'
                            price='4000'
                        />
                        <DepotProductCard
                            imageSrc='https://cf.shopee.co.id/file/f365d079bc1e2db366a210d82812a0e6'
                            title='Air RO'
                            price='4000'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

setLayout(Depot)

export default Depot
