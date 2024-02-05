const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const authRoutes = require('./routes/authRoutes.js');
const mahasiswaRoutes = require('./routes/mahasiswaRoutes.js');
const prodiRoutes = require('./routes/prodiRoutes');
const kelasRoutes = require('./routes/kelasRoutes.js');
const jadwalRoutes = require('./routes/jadwalRoutes.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// Middleware untuk membaca data JSON dari body permintaan
app.use(express.json());

// Menggunakan rute-rute yang telah Anda buat
app.use('/auth', authRoutes); // Misalnya, menggunakan '/auth' sebagai awalan URL
app.use('/mahasiswa', mahasiswaRoutes);
app.use('/prodi', prodiRoutes);
app.use('/kelas', kelasRoutes);
app.use('/jadwal', jadwalRoutes);

// Mengatasi rute yang tidak ditemukan (404)
app.use((req, res) => {
  res.status(404).json({ message: 'Rute tidak ditemukan' });
});




// Endpoint untuk registrasi pengguna



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
