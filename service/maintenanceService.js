const repo = require('../repository/maintenanceRepository');

exports.getMaintenances = (cb) => {
  repo.getAll(cb);
};

exports.createMaintenance = (data, cb) => {
  repo.getById(data.id_alat, (err, res) => {
    if (res.length > 0) {
      cb({ message: 'ID alat sudah ada' }, null);
    } else {
      repo.create(data, cb);
    }
  });
};

exports.updateMaintenance = (id, data, cb) => {
  repo.update(id, data, cb);
};

exports.deleteMaintenance = (id, cb) => {
  repo.delete(id, cb);
};
