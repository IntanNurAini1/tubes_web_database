const db = require('../config/db');

exports.getAll = (callback) => {
  db.query('SELECT * FROM maintenance_alat', callback);
};

exports.getById = (id, callback) => {
  db.query(
    'SELECT * FROM maintenance_alat WHERE id_alat = ?',
    [id],
    callback
  );
};

exports.create = (data, callback) => {
  db.query('INSERT INTO maintenance_alat SET ?', data, callback);
};

exports.update = (id, data, callback) => {
  db.query(
    'UPDATE maintenance_alat SET nama_alat=?, deskripsi=?, status=? WHERE id_alat=?',
    [data.nama_alat, data.deskripsi, data.status, id],
    callback
  );
};

exports.delete = (id, callback) => {
  db.query(
    'DELETE FROM maintenance_alat WHERE id_alat=?',
    [id],
    callback
  );
};
