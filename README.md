# TUGAS MATA KULIAH PEMROGRAMAN WEB LANJUTAN

## TUGAS INI DIBUAT OLEH KELOMPOK 1 REST API ABSENSI

Proyek ini guna memenuhi tugas UTS & UAS PEMROGRAMAN WEB LANJUTAN
Nama Anggota Kelompok :
1. Naufal
2. Mamdu 
3. Rifdha
4. Aryandika

## Instalasi
1. Pastikan Node.js sudah terinstal di sistem Anda. Jika belum, Anda dapat mengunduhnya di [Node.js](https://nodejs.org/).
2. Clone repositori ini ke dalam sistem Anda: git clone https://github.com/naufaalrmdhn/absensi
3. setelah proses clone selesai , ketik cd absensi
4. Ketik npm install
5. konfigurasi database terdapat pada file database.js
5. import database absensi.sql ke dalam sql anda
6. Jalankan perintah npm start


## Penggunaan 

### Autentikasi (Auth)

1. **Login:**
   - `POST /auth/login`
     - Request Body: `{ "username": "nama_pengguna", "password": "kata_sandi" }`
     - Response: `{ "token": "token_autentikasi" }`

2. **Register:**
   - `POST /auth/register`
     - Request Body: `{ "username": "nama_pengguna", "password": "kata_sandi" }`
     - Response: `{ "message": "Pendaftaran berhasil. Silakan login." }`

### Kelas

1. **List Semua Kelas:**
   - `GET /kelas`
     - Response: `[{"id": 1, "nama": "Kelas A"}, {"id": 2, "nama": "Kelas B"}, ...]`

2. **Detail Kelas:**
   - `GET /kelas/:id`
     - Response: `{"id": 1, "nama": "Kelas A"}`

3. **Tambah Kelas Baru:**
   - `POST /kelas`
     - Request Body: `{ "nama": "Kelas C" }`
     - Response: `{ "message": "Kelas berhasil ditambahkan." }`

4. **Update Kelas:**
   - `PUT /kelas/:id`
     - Request Body: `{ "nama": "Kelas D" }`
     - Response: `{ "message": "Kelas berhasil diperbarui." }`

### Prodi, Mahasiswa, dan Jadwal (CRUD)

Petunjuk routing untuk Prodi, Mahasiswa, dan Jadwal dapat diatur dengan cara yang sama seperti yang telah dijelaskan untuk Kelas di atas. Gantilah `/api/kelas` dengan `/api/prodi`, `/api/mahasiswa`, dan `/api/jadwal` sesuai dengan entitas yang diinginkan. Gunakan endpoint yang relevan untuk operasi CRUD yang diinginkan.

Misalnya:
- `GET /prodi`
- `GET /mahasiswa/:id`
- `POST /jadwal`
- `PUT /prodi/:id`
- dst.


