const service = require('../service/employeeService');

exports.getAll = (req, res) => {
  service.getEmployees((err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(data);
  });
};

exports.getByNip = (req, res) => {
  service.getEmployeeByNip(req.params.nip, (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!data || data.length === 0) return res.status(404).json({ message: 'Karyawan tidak ditemukan' });
    res.json(data[0]);
  });
};

exports.create = (req, res) => {
  if (!req.body.nip || !req.body.nama) {
    return res.status(400).json({ message: 'NIP dan Nama wajib diisi' });
  }

  service.createEmployee(req.body, (err) => {
    if (err) return res.status(400).json(err);
    res.json({ message: 'Data karyawan berhasil ditambahkan' });
  });
};

exports.update = (req, res) => {
  service.updateEmployee(req.params.nip, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Data karyawan berhasil diperbarui' });
  });
};

exports.delete = (req, res) => {
  service.deleteEmployee(req.params.nip, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Data karyawan berhasil dihapus' });
  });
};