// routes/mahasiswaRoutes.js
const express = require('express');
const router = express.Router();
const mahasiswaController = require('../controllers/mahasiswaController');
const authMiddleware = require('../middleware/middleware.js');

router.use(authMiddleware.authenticateToken)
// Rute untuk mendapatkan semua mahasiswa
router.get('/', mahasiswaController.getAllMahasiswa);

// Rute untuk mendapatkan mahasiswa berdasarkan ID
router.get('/:id', mahasiswaController.getMahasiswaById);

// Rute untuk menambahkan mahasiswa baru
router.post('/', mahasiswaController.addMahasiswa);

// Rute untuk memperbarui mahasiswa
router.put('/:id', mahasiswaController.updateMahasiswa);

// Rute untuk menghapus mahasiswa
router.delete('/:id', mahasiswaController.deleteMahasiswa);
module.exports = router;

