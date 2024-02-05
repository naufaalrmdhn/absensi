// routes/kelasRoutes.js
const express = require('express');
const router = express.Router();
const kelasController = require('../controllers/kelasController');
//const {authenticateToken} = require('../middleware/middleware.js');
const authMiddleware = require('../middleware/middleware.js');

router.use(authMiddleware.authenticateToken)
// Rute untuk mendapatkan semua kelas
router.get('/', kelasController.getAllKelas);

// Rute untuk mendapatkan kelas berdasarkan ID
router.get('/:id', kelasController.getKelasById);

// Rute untuk menambahkan kelas baru
router.post('/', kelasController.addKelas);

// Rute untuk memperbarui kelas
router.put('/:id', kelasController.updateKelas);

// Rute untuk menghapus kelas
router.delete('/:id', kelasController.deleteKelas);

module.exports = router;
