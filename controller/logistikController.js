const logistikService = require("../service/logistikService");

const getAll = async (req, res) => {
  try {
    const data = await logistikService.getAllLogistik();
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

const create = async (req, res) => {
  try {
    await logistikService.createLogistik(req.body);
    res.json({ message: "Logistik berhasil ditambahkan" });
  } catch (err) {
    res.status(500).json(err);
  }
};

const update = async (req, res) => {
  try {
    await logistikService.updateLogistik(req.params.id, req.body);
    res.json({ message: "Logistik berhasil diupdate" });
  } catch (err) {
    res.status(500).json(err);
  }
};

const remove = async (req, res) => {
  try {
    await logistikService.deleteLogistik(req.params.id);
    res.json({ message: "Logistik berhasil dihapus" });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAll,
  create,
  update,
  remove,
};
