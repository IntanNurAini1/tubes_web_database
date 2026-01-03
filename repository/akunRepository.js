const db = require('../config/db');

exports.create = (data, cb) => {
  const sql = `
    INSERT INTO akun (nip, username, password)
    VALUES (?, ?, ?)
  `;
  db.query(sql, [data.nip, data.username, data.password], cb);
};

exports.findAll = (cb) => {
  db.query('SELECT * FROM akun', cb);
};

exports.findById = (id, cb) => {
  db.query('SELECT * FROM akun WHERE id_akun = ?', [id], cb);
};

exports.update = (id, data, cb) => {
  const sql = `
    UPDATE akun
    SET username = ?, password = ?
    WHERE id_akun = ?
  `;
  db.query(sql, [data.username, data.password, id], cb);
};

exports.login = (username, password, cb) => {
  const sql = `
    SELECT * FROM akun
    WHERE username = ? AND password = ?
    LIMIT 1
  `;
  db.query(sql, [username, password], cb);
};
