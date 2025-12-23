const db = require("../config/db");

const getAll = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM logistik", (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

const create = (data) => {
  const { kode, nama, jumlah, status, harga } = data;
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO logistik VALUES (NULL,?,?,?,?,?)",
      [kode, nama, jumlah, status, harga],
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
  });
};

const update = (id, data) => {
  const { kode, nama, jumlah, status, harga } = data;
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE logistik SET kode=?, nama=?, jumlah=?, status=?, harga=? WHERE id=?",
      [kode, nama, jumlah, status, harga, id],
      (err) => {
        if (err) reject(err);
        else resolve();
      }
    );
  });
};

const remove = (id) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM logistik WHERE id=?", [id], (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
};

module.exports = {
  getAll,
  create,
  update,
  remove,
};
