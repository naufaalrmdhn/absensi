// routes/jadwalRoutes.js
const express = require('express');
const router = express.Router();
const jadwalController = require('../controllers/jadwalController');
const authMiddleware = require('../middleware/middleware');

router.use(authMiddleware.authenticateToken);

router.get('/', jadwalController.getAllJadwal);
router.get('/:id', jadwalController.getJadwalById);
router.post('/', jadwalController.addJadwal);
router.put('/:id', jadwalController.updateJadwal);
router.delete('/:id', jadwalController.deleteJadwal);

// router.post('/', authMiddleware.authorizeMahasiswa, jadwalController.addJadwal);
// router.put('/:id', authMiddleware.authorizeMahasiswa, jadwalController.updateJadwal);
// router.delete('/:id', authMiddleware.authorizeMahasiswa, jadwalController.deleteJadwal);

module.exports = router;
