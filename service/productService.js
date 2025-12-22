const repo = require('../repository/productRepository');

exports.getProducts = (cb) => {
  repo.getAll(cb);
};

exports.createProduct = (data, cb) => {
  repo.getByKode(data.kode_produk, (err, res) => {
    if (res.length > 0) {
      cb({ message: 'Kode produk sudah ada' }, null);
    } else {
      repo.create(data, cb);
    }
  });
};

exports.updateProduct = (kode, data, cb) => {
  repo.update(kode, data, cb);
};

exports.deleteProduct = (kode, cb) => {
  repo.delete(kode, cb);
};
