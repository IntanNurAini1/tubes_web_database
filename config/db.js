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
});

module.exports = db;
