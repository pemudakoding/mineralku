Selamat ***{{$data['name']}}*** pesanan kamu berhasil dibuat, kami akan meneruskan ke Depot Air Minum isi ulang {{$data['depot_name']}} untuk memproses pesanan kamu.

***DETAIL PESANAN KAMU***
Nama Pemesan: {{$data['name']}}
Jumlah Pesanan (Galon): {{$data['quantity']}}
Nomor Whatsapp: {{$data['whatsapp_numbers']}}
Alamat Lengkap: {{$data['address']}}
Nama Depot: {{$data['depot_name']}}
Jadwal Pengantaran: {{$data['is_delivery_now'] ? 'Sekarang' : $data['delivery_date'] . ' ' . $data['delivery_time']}}

***TOTAL PEMBAYARAN***
Total Produk: {{$data['quantity']}} x Rp. 5000
Total Pengiriman: Rp. 1000
Service Fee : Rp. 1000
```
(Service fee agar kami bisa meningkatkan pelayanan terbaik buat kamu)
```
Total Pembayaran: Rp. 7000

Terima Kasih telah berbelanja di www.mineralku.id Silahkan menunggu konfirmasi terbaru dari kami.
