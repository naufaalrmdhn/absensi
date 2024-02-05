// controllers/prodiController.js
const db = require('../database');


const prodiController = {
  getAllProdi: (req, res) => {
    db.query('SELECT * FROM prodi', (err, results) => {
      if (err) {
        res.status(500).json({ message: 'Kesalahan pada server' });
      } else {
        res.status(200).json(results);
      }
    });
  },

  getProdiById: (req, res) => {
    const prodiId = req.params.id;
    db.query('SELECT * FROM prodi WHERE id = ?', [prodiId], (err, results) => {
      if (err) {
        res.status(500).json({ message: 'Kesalahan pada server' });
      } else {
        if (results.length > 0) {
          res.status(200).json(results[0]);
        } else {
          res.status(404).json({ message: 'Program studi tidak ditemukan' });
        }
      }
    });
  },

  addProdi: (req, res) => {
    const { jurusan, fakultas } = req.body;
    db.query('INSERT INTO prodi (jurusan, fakultas) VALUES (?, ?)', [jurusan, fakultas], (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Gagal menambahkan program studi' });
      } else {
        res.status(201).json({ message: 'Program studi berhasil ditambahkan' });
      }
    });
  },

  updateProdi: (req, res) => {
    const prodiId = req.params.id;
    const { jurusan, fakultas } = req.body;
    db.query('UPDATE prodi SET jurusan = ?, fakultas = ? WHERE id = ?', [jurusan, fakultas, prodiId], (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Gagal memperbarui program studi' });
      } else {
        res.status(200).json({ message: 'Program studi berhasil diperbarui' });
      }
    });
  },

  deleteProdi: (req, res) => {
    const prodiId = req.params.id;
    db.query('DELETE FROM prodi WHERE id = ?', [prodiId], (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Gagal menghapus program studi' });
      } else {
        res.status(200).json({ message: 'Program studi berhasil dihapus' });
      }
    });
  }
};

module.exports = prodiController;
