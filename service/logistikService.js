const logistikRepository = require("../repository/logistikRepository");

const getAllLogistik = async () => {
  return await logistikRepository.getAll();
};

const createLogistik = async (data) => {
  return await logistikRepository.create(data);
};

const updateLogistik = async (id, data) => {
  return await logistikRepository.update(id, data);
};

const deleteLogistik = async (id) => {
  return await logistikRepository.remove(id);
};

module.exports = {
  getAllLogistik,
  createLogistik,
  updateLogistik,
  deleteLogistik,
};
