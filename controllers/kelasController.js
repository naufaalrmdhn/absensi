// controllers/kelasController.js
const db = require('../database');

const kelasController = {
  getAllKelas: (req, res) => {
    db.query('SELECT * FROM kelas', (err, results) => {
      if (err) {
        res.status(500).json({ message: 'Kesalahan pada server' });
      } else {
        res.status(200).json(results);
      }
    });
  },

  getKelasById: (req, res) => {
    const kelasId = req.params.id;
    db.query('SELECT * FROM kelas WHERE id = ?', [kelasId], (err, results) => {
      if (err) {
        res.status(500).json({ message: 'Kesalahan pada server' });
      } else {
        if (results.length > 0) {
          res.status(200).json(results[0]);
        } else {
          res.status(404).json({ message: 'Kelas tidak ditemukan' });
        }
      }
    });
  },

  addKelas: (req, res) => {
    const { nama } = req.body;
    db.query('INSERT INTO kelas (nama) VALUES (?)', [nama], (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Gagal menambahkan kelas' });
      } else {
        res.status(201).json({ message: 'Kelas berhasil ditambahkan' });
      }
    });
  },

  updateKelas: (req, res) => {
    const kelasId = req.params.id;
    const { nama } = req.body;
    db.query('UPDATE kelas SET nama = ? WHERE id = ?', [nama, kelasId], (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Gagal memperbarui kelas' });
      } else {
        res.status(200).json({ message: 'Kelas berhasil diperbarui' });
      }
    });
  },

  deleteKelas: (req, res) => {
    const kelasId = req.params.id;
    db.query('DELETE FROM kelas WHERE id = ?', [kelasId], (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Gagal menghapus kelas' });
      } else {
        res.status(200).json({ message: 'Kelas berhasil dihapus' });
      }
    });
  }
};

module.exports = kelasController;
