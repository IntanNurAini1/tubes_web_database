const db = require('../config/db');

exports.getAll = (callback) => {
  db.query('SELECT * FROM products', callback);
};

exports.getByKode = (kode, callback) => {
  db.query(
    'SELECT * FROM products WHERE kode_produk = ?',
    [kode],
    callback
  );
};

exports.create = (data, callback) => {
  db.query('INSERT INTO products SET ?', data, callback);
};

exports.update = (kode, data, callback) => {
  db.query(
    'UPDATE products SET nama_produk=?, jumlah=?, status=? WHERE kode_produk=?',
    [data.nama_produk, data.jumlah, data.status, kode],
    callback
  );
};

exports.delete = (kode, callback) => {
  db.query(
    'DELETE FROM products WHERE kode_produk=?',
    [kode],
    callback
  );
};
