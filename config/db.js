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
        CREATE TABLE IF NOT EXISTS logistik (
          id INT AUTO_INCREMENT PRIMARY KEY,
          kode VARCHAR(20),
          nama VARCHAR(100),
          jumlah INT,
          status VARCHAR(20),
          harga DECIMAL(10,2)
        )
      `, () => console.log('Table logistik ready'));
  });

  db.query(`
    CREATE TABLE IF NOT EXISTS meetings (
      id_meeting VARCHAR(50) PRIMARY KEY,
      judul VARCHAR(100),
      tanggal DATE,
      waktu TIME,
      deskripsi TEXT,
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

  db.query(`
    CREATE TABLE IF NOT EXISTS karyawan (
      nip VARCHAR(20) PRIMARY KEY,
      nama VARCHAR(100),
      divisi VARCHAR(50),
      jabatan VARCHAR(50),
      status VARCHAR(20),
      gaji DECIMAL(15, 2),
      alamat TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `, (err) => {
    if (err) console.error("Error creating karyawan table:", err);
    else console.log('Table karyawan ready');
  });

  db.query(`
    CREATE TABLE IF NOT EXISTS akun (
      id_akun INT AUTO_INCREMENT PRIMARY KEY,
      nip VARCHAR(20),
      username VARCHAR(50) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      FOREIGN KEY (nip) REFERENCES karyawan(nip)
        ON DELETE CASCADE
        ON UPDATE CASCADE
    )
  `, () => console.log('Table akun ready'));


module.exports = db;
