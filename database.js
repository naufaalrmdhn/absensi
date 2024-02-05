const mysql = require('mysql');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'absensi'
};

const db = mysql.createConnection(dbConfig);

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Database terhubung!');
});

module.exports = db;