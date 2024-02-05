// models/mahasiswaModel.js
const db = require('../database')

const Mahasiswa = {
  getAllMahasiswa: (callback) => {
    db.query('SELECT * FROM mahasiswa', callback);
  },

  getMahasiswaById: (mahasiswaId, callback) => {
    db.query('SELECT * FROM mahasiswa WHERE id = ?', [mahasiswaId], callback);
  },

  addMahasiswa: (mahasiswaData, callback) => {
    db.query('INSERT INTO mahasiswa SET ?', [mahasiswaData], callback);
  },

  updateMahasiswa: (mahasiswaId, mahasiswaData, callback) => {
    db.query('UPDATE mahasiswa SET ? WHERE id = ?', [mahasiswaData, mahasiswaId], callback);
  },

  deleteMahasiswa: (mahasiswaId, callback) => {
    db.query('DELETE FROM mahasiswa WHERE id = ?', [mahasiswaId], callback);
  }
};

module.exports = Mahasiswa;
