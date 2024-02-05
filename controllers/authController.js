const db = require('../database.js');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authController = {
  login: (req, res) => {
    const { username, password } = req.body;

  // Query database untuk mendapatkan data pengguna
  db.query('SELECT * FROM users WHERE username = ?', username, (err, results) => {
    if (err) {
      res.status(500).send({ message: 'Kesalahan pada server' });
    } else {
      if (results.length > 0) {
        const user = results[0];
        // Memeriksa kredensial menggunakan Bcrypt
        bcrypt.compare(password, user.password, (bcryptErr, bcryptRes) => {
          if (bcryptErr || !bcryptRes) {
            res.status(401).send({ message: 'Kredensial tidak valid' });
          } else {
            // Jika kredensial valid, buat token JWT
            const token = jwt.sign(
              { userId: user.id, username: user.username, email: user.email, role: user.role },
              'kunci_rahasia',
              { expiresIn: '1h' }
            );
            res.status(200).send({ token, role: user.role });
            console.log('Token with Role:', token);
          }
        });
      } else {
        res.status(404).send({ message: 'Pengguna tidak ditemukan' });
      }
    }
  });
  }
  ,
  
    register: (req, res) => {
      const { username, password, email, role } = req.body;
  
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          res.status(500).json({ message: 'Gagal membuat pengguna' });
        } else {
          const user = { username, password: hash, email, role };
  
          db.query('INSERT INTO users SET ?', user, (err, result) => {
            if (err) {
              res.status(500).json({ message: 'Gagal mendaftarkan pengguna' });
            } else {
              res.status(200).json({ message: 'Pengguna berhasil didaftarkan' });
            }
          });
        }
      });
    },

    getUsers: (req, res) => {
      db.query('SELECT * FROM users', (err, results) => {
        if (err) {
          res.status(500).json({ message: 'Kesalahan pada server' });
        } else {
          res.status(200).json(results);
        }
      });
    },

    getUserById: (req, res) => {
      const userId = req.params.id;
  
      db.query('SELECT * FROM users WHERE id = ?', userId, (err, results) => {
        if (err) {
          res.status(500).json({ message: 'Kesalahan pada server' });
        } else {
          if (results.length > 0) {
            res.status(200).json(results[0]);
          } else {
            res.status(404).json({ message: 'Pengguna tidak ditemukan!!' });
          }
        }
      });
    },

    editUserById: (req, res) => {
      const userId = req.params.id;
      const { username, password, email } = req.body;
  
      // Enkripsi sandi jika ada perubahan
      if (password) {
        bcrypt.hash(password, 10, (err, hash) => {
          if (err) {
            res.status(500).json({ message: 'Gagal mengenkripsi sandi' });
          } else {
            const updatedUser = { username, password: hash, email };
            db.query('UPDATE users SET ? WHERE id = ?', [updatedUser, userId], (err, result) => {
              if (err) {
                res.status(500).json({ message: 'Gagal memperbarui pengguna' });
              } else {
                res.status(200).json({ message: 'Pengguna berhasil diperbarui' });
              }
            });
          }
        });
      } else {
        // Jika tidak ada perubahan sandi
        const updatedUser = { username, email };
        db.query('UPDATE users SET ? WHERE id = ?', [updatedUser, userId], (err, result) => {
          if (err) {
            res.status(500).json({ message: 'Gagal memperbarui pengguna' });
          } else {
            res.status(200).json({ message: 'Pengguna berhasil diperbarui' });
          }
        });
      }
    },

    deleteUserById: (req, res) => {
      
      const userId = req.params.id;
      console.log('Deleting user with ID:', userId);
    
      db.query('DELETE FROM users WHERE id = ?', [userId], (err, result) => {
        if (err) {
          console.error('Error deleting user:', err);
          res.status(500).json({ message: 'Gagal menghapus pengguna' });
        } else {
          console.log('User deleted successfully.');
          console.log('Query result:', result);
          res.status(200).json({ message: 'Pengguna berhasil dihapus' });
        }
      });
    },
    
    

  };

  
  module.exports = authController;