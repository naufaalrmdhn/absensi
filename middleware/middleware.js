// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const token = req.header('Authorization').split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token tidak disertakan' });
  }

  jwt.verify(token, 'kunci_rahasia', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token tidak valid' });
    }

    // Tambahkan informasi peran ke dalam req
    req.userId = decoded.userId;
    req.role = decoded.role;

    // Otorisasi berdasarkan peran pengguna
    if (req.role === 'admin') {
      // Pengguna dengan peran 'admin' memiliki akses penuh
      next();
    } else if (req.role === 'mahasiswa' && req.baseUrl.includes('/mahasiswa')) {
      // Pengguna dengan peran 'mahasiswa' hanya dapat mengakses rute mahasiswa
      next();
    } else {
      // Jika peran bukan 'mahasiswa' atau bukan 'admin', tolak akses
      return res.status(403).json({ message: 'Akses ditolak. Anda tidak memiliki izin yang diperlukan.' });
    }
  });
}

module.exports = { authenticateToken };
