import React from 'react'
import { setLayout } from '@/Utils/Layout'
import {
    HeroSection,
    DepotImage
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
                    <div className="depot-desc mt-14 flex items-center">
                        <div className="left-desc mr-8">
                            <DepotImage verified/>
                        </div>
                        <div className="right-desc">
                            <h3 className='fredoka-one text-2xl'>DEPOT PEMUDA KODING</h3>
                        </div>
                    </div>
                </div>
            </HeroSection>
        </>
    )
}

setLayout(Depot)

export default Depot
