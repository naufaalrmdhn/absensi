// models/Jadwal.js
const db = require('../database');

class Jadwal {
  static getAllJadwal(callback) {
    db.query('SELECT * FROM jadwal', callback);
  }

  static getJadwalById(id, callback) {
    db.query('SELECT * FROM jadwal WHERE id_jadwal = ?', [id], callback);
  }

  static addJadwal(newJadwal, callback) {
    db.query('INSERT INTO jadwal SET ?', [newJadwal], callback);
  }

  static updateJadwal(id, updatedJadwal, callback) {
    db.query('UPDATE jadwal SET ? WHERE id_jadwal = ?', [updatedJadwal, id], callback);
  }

  static deleteJadwal(id, callback) {
    db.query('DELETE FROM jadwal WHERE id_jadwal = ?', [id], callback);
  }
}

module.exports = Jadwal;
