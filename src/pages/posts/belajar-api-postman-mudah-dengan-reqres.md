---
layout: '@/templates/BasePost.astro'
title: Belajar API Postman Mudah dengan Reqres
description: Panduan praktis belajar API dengan Postman menggunakan Reqres. Pelajari cara mengirim GET, POST, PUT, dan DELETE request dengan mudah tanpa perlu backend! 🚀
pubDate: 2025-04-10T00:00:00Z
imgSrc: '/assets/images/reqres.jpg'
imgAlt: 'Image post 8'
---

---

## Pendahuluan : 

Postman adalah alat yang sangat populer untuk menguji API. Dengan Postman, kita bisa melakukan berbagai request ke server untuk menguji bagaimana API bekerja. Salah satu API publik yang sering digunakan untuk belajar adalah Reqres (https://reqres.in/). Reqres menyediakan data dummy untuk melakukan pengujian tanpa perlu membuat backend sendiri.


## Persiapan :

Sebelum mulai, pastikan Anda sudah menginstal Postman. Jika belum, unduh dan instal dari situs resmi Postman. Atau bisa juga menggunakan Postman Web (https://web.postman.co/).

## Menggunakan Reqres dengan Postman

## 1. Mengirim Request GET

Reqres menyediakan beberapa endpoint untuk mendapatkan data pengguna.
Mendapatkan daftar pengguna

- URL: https://reqres.in/api/users?page=2
- Method: GET

- Langkah-langkah:
 1. Buka Postman
 2. Pilih method GET
 3. Masukkan URL di kolom request
 4. Klik tombol Send
 5. Hasil yang diterima akan berupa daftar pengguna dalam format JSON

## 2. Mengirim Request POST (Menambahkan Pengguna)

Untuk menambahkan pengguna, kita menggunakan metode POST dengan mengirimkan data JSON.

- URL: https://reqres.in/api/users
- Method: POST
- Body (raw, JSON):

  ```python
  {
   "name": "Rival Muhammad Sayid",
   "job": "Quality Assurance Engineer"
  }
  ```

- Langkah-langkah:
1. Pilih method POST
2. Masukkan URL
3. Pilih tab Body, lalu pilih raw dan ubah format menjadi JSON
4. Masukkan data JSON seperti di atas
5. Klik Send
6. Jika berhasil, akan ada response dengan data pengguna yang baru dibuat

## 3. Mengirim Request PUT (Mengupdate Pengguna)

Untuk memperbarui data pengguna, kita menggunakan metode PUT.

- URL: https://reqres.in/api/users/2
- Method: PUT
- Body (JSON):

 ```python
  {
  "name": "Jane Doe",
  "job": "Data Analyst"
  }
  ```

- Langkah-langkah:
1. Pilih method PUT
2. Masukkan URL
3. Pilih tab Body dan ubah format ke JSON
4. Masukkan data pengguna yang ingin diperbarui
5. Klik Send
6. Jika berhasil, response akan menunjukkan data pengguna yang diperbarui

## 4. Mengirim Request DELETE (Menghapus Pengguna)

Jika ingin menghapus pengguna, gunakan metode DELETE.

- URL: https://reqres.in/api/users/2
- Method: DELETE

- Langkah-langkah:
1. Pilih method DELETE
2. Masukkan URL
3. Klik Send
4. Jika berhasil, akan mendapatkan response dengan status 204 No Content

### Kesimpulan

Belajar API dengan Postman dan Reqres sangat mudah karena kita bisa langsung menguji berbagai metode HTTP seperti GET, POST, PUT, dan DELETE tanpa perlu membuat backend sendiri. Dengan memahami dasar-dasar ini, Anda bisa lebih siap dalam mengembangkan dan menguji API di dunia nyata.

