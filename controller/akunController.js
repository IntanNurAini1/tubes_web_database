const service = require('../service/akunService');

exports.create = (req, res) => {
  service.create(req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Akun berhasil dibuat' });
  });
};

exports.getAll = (req, res) => {
  service.getAll((err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
};

exports.getById = (req, res) => {
  service.getById(req.params.id, (err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data[0]);
  });
};

exports.update = (req, res) => {
  service.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Akun berhasil diupdate' });
  });
};

exports.login = (req, res) => {
  service.login(req.body, (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.length > 0) {
      return res.json({
        success: true,
        data: result[0]
      });
    }

    res.json({ success: false });
  });
};
