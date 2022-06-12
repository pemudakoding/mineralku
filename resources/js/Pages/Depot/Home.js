import React from 'react'

const Home = () => {
    return (
      <div className="mineralku-app bg-blue-default-50">
          <div className="md:w-6/12 w-10/12 mx-auto">
            <main className="container py-10">
                <div className="profile flex items-center flex-col poppins my-10">
                    <h3 className='text-black text-xl font-medium'>
                        Selamat Bekerja, Depot Air Afiqah
                    </h3>
                    <div className="address bg-green-300 w-fit p-2 rounded mt-4 ">
                        <p className='text-xs'>Jl Dayodara, Palu, Sulawesi Tengah</p>
                    </div>
                </div>
                <div className="statistics my-10">
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                        <div className="card-income bg-gray-50 p-5 shadow rounded-lg poppins">
                            <div className="card-title text-gray-400">Pendapatan</div>
                            <div className="card-body mt-4">
                                <p className='text-2xl text-gray-400'>
                                    Rp. 10000
                                </p>
                            </div>
                        </div>
                        <div className="card-income bg-gray-50 p-5 shadow rounded-lg poppins">
                            <div className="card-title text-gray-400">Transaksi</div>
                            <div className="card-body mt-4">
                                <p className='text-2xl text-gray-400'>
                                    1
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
          </div>
      </div>
    )
  }

export default Home;
