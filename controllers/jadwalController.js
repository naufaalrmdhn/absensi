// controllers/jadwalController.js
const Jadwal = require('../models/jadwalModel');

const jadwalController = {
  getAllJadwal: (req, res) => {
    Jadwal.getAllJadwal((err, results) => {
      if (err) {
        res.status(500).json({ message: 'Internal Server Error' });
      } else {
        res.status(200).json(results);
      }
    });
  },

  getJadwalById: (req, res) => {
    const { id } = req.params;
    Jadwal.getJadwalById(id, (err, results) => {
      if (err) {
        res.status(500).json({ message: 'Internal Server Error' });
      } else {
        if (results.length > 0) {
          res.status(200).json(results[0]);
        } else {
          res.status(404).json({ message: 'Jadwal not found' });
        }
      }
    });
  },

  addJadwal: (req, res) => {
    const newJadwal = req.body;
    Jadwal.addJadwal(newJadwal, (err, results) => {
      if (err) {
        res.status(500).json({ message: 'Internal Server Error' });
      } else {
        res.status(201).json({ message: 'Jadwal added successfully' });
      }
    });
  },

  updateJadwal: (req, res) => {
    const { id } = req.params;
    const updatedJadwal = req.body;
    Jadwal.updateJadwal(id, updatedJadwal, (err, results) => {
      if (err) {
        res.status(500).json({ message: 'Internal Server Error' });
      } else {
        res.status(200).json({ message: 'Jadwal updated successfully' });
      }
    });
  },

  deleteJadwal: (req, res) => {
    const { id } = req.params;
    Jadwal.deleteJadwal(id, (err, results) => {
      if (err) {
        res.status(500).json({ message: 'Internal Server Error' });
      } else {
        res.status(200).json({ message: 'Jadwal deleted successfully' });
      }
    });
  },
};

module.exports = jadwalController;
