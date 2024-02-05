// controllers/mahasiswaController.js
const Mahasiswa = require('../models/mahasiswaModel');

const mahasiswaController = {
  getAllMahasiswa: (req, res) => {
    Mahasiswa.getAllMahasiswa((err, results) => {
      if (err) {
        res.status(500).json({ message: 'Kesalahan pada server' });
      } else {
        res.status(200).json(results);
      }
    });
  },

  getMahasiswaById: (req, res) => {
    const mahasiswaId = req.params.id;
    Mahasiswa.getMahasiswaById(mahasiswaId, (err, results) => {
      if (err) {
        res.status(500).json({ message: 'Kesalahan pada server' });
      } else {
        if (results.length > 0) {
          res.status(200).json(results[0]);
        } else {
          res.status(404).json({ message: 'Mahasiswa tidak ditemukan' });
        }
      }
    });
  },

  addMahasiswa: (req, res) => {
    const newMahasiswa = req.body;
    Mahasiswa.addMahasiswa(newMahasiswa, (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Gagal menambahkan mahasiswa' });
      } else {
        res.status(201).json({ message: 'Mahasiswa berhasil ditambahkan' });
      }
    });
  },

  updateMahasiswa: (req, res) => {
    const mahasiswaId = req.params.id;
    const updatedMahasiswa = req.body;
    Mahasiswa.updateMahasiswa(mahasiswaId, updatedMahasiswa, (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Gagal memperbarui mahasiswa' });
      } else {
        res.status(200).json({ message: 'Mahasiswa berhasil diperbarui' });
      }
    });
  },

  deleteMahasiswa: (req, res) => {
    const mahasiswaId = req.params.id;
    Mahasiswa.deleteMahasiswa(mahasiswaId, (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Gagal menghapus mahasiswa' });
      } else {
        res.status(200).json({ message: 'Mahasiswa berhasil dihapus' });
      }
    });
  }
};

module.exports = mahasiswaController;
