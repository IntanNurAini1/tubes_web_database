const repo = require('../repository/akunRepository');

exports.create = (data, cb) => {
  repo.create(data, cb);
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

