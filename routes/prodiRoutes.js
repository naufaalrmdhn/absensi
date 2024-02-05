// routes/prodiRoutes.js
const express = require('express');
const router = express.Router();
const prodiController = require('../controllers/prodiController');
const authMiddleware = require('../middleware/middleware.js');

router.use(authMiddleware.authenticateToken)
// Rute untuk mendapatkan semua program studi
router.get('/', prodiController.getAllProdi);

// Rute untuk mendapatkan program studi berdasarkan ID
router.get('/:id', prodiController.getProdiById);

// Rute untuk menambahkan program studi baru
router.post('/', prodiController.addProdi);

// Rute untuk memperbarui program studi
router.put('/:id', prodiController.updateProdi);

// Rute untuk menghapus program studi
router.delete('/:id', prodiController.deleteProdi);

module.exports = router;
