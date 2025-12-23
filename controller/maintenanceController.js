const service = require('../service/maintenanceService');

exports.getAll = (req, res) => {
  service.getMaintenances((err, data) => {
    res.json(data);
  });
};

exports.create = (req, res) => {
  service.createMaintenance(req.body, (err) => {
    if (err) return res.status(400).json(err);
    res.json({ message: 'Maintenance alat berhasil ditambahkan' });
  });
};

exports.update = (req, res) => {
  service.updateMaintenance(req.params.id, req.body, () => {
    res.json({ message: 'Maintenance alat berhasil diupdate' });
  });
};

exports.delete = (req, res) => {
  service.deleteMaintenance(req.params.id, () => {
    res.json({ message: 'Maintenance alat berhasil dihapus' });
  });
};
