const repo = require('../repository/employeeRepository');

exports.getEmployees = (cb) => {
  repo.getAll(cb);
};

exports.getEmployeeByNip = (nip, cb) => {
  repo.getByNip(nip, cb);
};

exports.createEmployee = (data, cb) => {
  // Validasi: Cek apakah NIP sudah ada
  repo.getByNip(data.nip, (err, res) => {
    if (err) return cb(err, null);
    
    if (res && res.length > 0) {
      return cb({ message: 'NIP karyawan sudah terdaftar' }, null);
    } else {
      // Jika NIP belum ada, lakukan create
      repo.create(data, cb);
    }
  });
};

exports.updateEmployee = (nip, data, cb) => {
  repo.update(nip, data, cb);
};

exports.deleteEmployee = (nip, cb) => {
  repo.delete(nip, cb);
};