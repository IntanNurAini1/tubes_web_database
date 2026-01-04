const repo = require('../repository/akunRepository');
const db = require('../config/db');

exports.create = (data, callback) => {
  const { nip } = data;

  // 1️⃣ cek karyawan
  db.query(
    'SELECT nip FROM karyawan WHERE nip = ?',
    [nip],
    (err, karyawan) => {
      if (err) return callback(err);

      if (karyawan.length === 0) {
        return callback({
          status: 400,
          message: 'ID Karyawan tidak terdaftar'
        });
      }

      // 2️⃣ cek akun
      db.query(
        'SELECT nip FROM akun WHERE nip = ?',
        [nip],
        (err, akun) => {
          if (err) return callback(err);

          if (akun.length > 0) {
            return callback({
              status: 400,
              message: 'ID Karyawan sudah memiliki akun'
            });
          }

          // 3️⃣ insert via repository
          repo.create(data, (err) => {
            if (err) return callback(err);
            callback(null);
          });
        }
      );
    }
  );
};


exports.getAll = (cb) => {
  repo.findAll(cb);
};

exports.getById = (id, cb) => {
  repo.findById(id, cb);
};

exports.update = (id, data, cb) => {
  repo.update(id, data, cb);
};

exports.login = (data, cb) => {
  repo.login(data.username, data.password, cb);
};

