Selamat ***{{$data['name']}}*** pesanan kamu berhasil dibuat, dan kami akan meneruskan ke pihak kami untuk memproses pesanan kamu.

***DETAIL PESANAN KAMU***
Nama Pemesan: {{$data['name']}}
Jumlah Pesanan (Galon): {{$data['quantity']}}
Nomor Whatsapp: {{$data['whatsapp_numbers']}}
Alamat Lengkap: {{$data['address']}}
Jadwal Pengantaran: {{$data['is_delivery_now'] ? 'Sekarang' : $data['delivery_date'] . ' ' . $data['delivery_time']}}

***TOTAL PEMBAYARAN***
Total Produk: {{$data['quantity']}} x Rp. 5000
Total Pengiriman: Rp. 1000
Service Fee (10%): Rp. 600
```
(Service fee agar kami bisa meningkatkan pelayanan terbaik buat kamu)
```
Total Pembayaran: Rp. 6600

Terima Kasih telah berbelanja di www.mineralku.id Silahkan menunggu konfirmasi terbaru dari kami.
