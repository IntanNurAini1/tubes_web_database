const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) throw err;
  console.log('Database connected');
  db.query(`
    CREATE TABLE IF NOT EXISTS products (
      kode_produk VARCHAR(20) PRIMARY KEY,
      nama_produk VARCHAR(100),
      jumlah INT,
      status VARCHAR(20)
    )
  `, () => {
    console.log('Table products ready');
  });

  db.query(`
    CREATE TABLE IF NOT EXISTS meetings (
      id_meeting VARCHAR(50) PRIMARY KEY,
      judul VARCHAR(100),
      tanggal DATE,
      waktu TIME,
      deskripsi TEXT
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `, () => {
    console.log('Table meetings ready');
  });

  db.query(`
    CREATE TABLE IF NOT EXISTS maintenance_alat (
      id_alat VARCHAR(20) PRIMARY KEY,
      nama_alat VARCHAR(100),
      deskripsi TEXT,
      status VARCHAR(20)
    )
  `, () => {
    console.log('Table maintenance_alat ready');
  });

});

module.exports = db;
