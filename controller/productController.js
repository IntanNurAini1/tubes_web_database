const service = require('../service/productService');

exports.getAll = (req, res) => {
  service.getProducts((err, data) => {
    res.json(data);
  });
};

exports.create = (req, res) => {
  service.createProduct(req.body, (err) => {
    if (err) return res.status(400).json(err);
    res.json({ message: 'Produk berhasil ditambahkan' });
  });
};

exports.update = (req, res) => {
  service.updateProduct(req.params.kode, req.body, () => {
    res.json({ message: 'Produk berhasil diupdate' });
  });
};

exports.delete = (req, res) => {
  service.deleteProduct(req.params.kode, () => {
    res.json({ message: 'Produk berhasil dihapus' });
  });
};
