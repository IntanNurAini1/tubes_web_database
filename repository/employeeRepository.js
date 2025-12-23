const db = require('../config/db');

exports.getAll = (callback) => {
  db.query('SELECT * FROM karyawan', callback);
};

exports.getByNip = (nip, callback) => {
  db.query(
    'SELECT * FROM karyawan WHERE nip = ?',
    [nip],
    callback
  );
};

exports.create = (data, callback) => {
  const query = 'INSERT INTO karyawan (nip, nama, divisi, jabatan, status, gaji, alamat) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const values = [data.nip, data.nama, data.divisi, data.jabatan, data.status, data.gaji, data.alamat];
  
  db.query(query, values, callback);
};

exports.update = (nip, data, callback) => {
  const query = `
    UPDATE karyawan 
    SET nama = ?, divisi = ?, jabatan = ?, status = ?, gaji = ?, alamat = ? 
    WHERE nip = ?
  `;
  const values = [data.nama, data.divisi, data.jabatan, data.status, data.gaji, data.alamat, nip];

  db.query(query, values, callback);
};

exports.delete = (nip, callback) => {
  db.query(
    'DELETE FROM karyawan WHERE nip = ?',
    [nip],
    callback
  );
};