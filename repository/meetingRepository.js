const db = require('../config/db');

const MeetingRepository = {
  create(meeting, callback) {
    const query = `INSERT INTO meetings (id_meeting, judul, tanggal, waktu, deskripsi)VALUES (?, ?, ?, ?, ?)`;
    db.query(query, [
      meeting.id_meeting,
      meeting.judul,
      meeting.tanggal,
      meeting.waktu,
      meeting.deskripsi
    ], callback);
  },

  findAll(callback) {
    db.query('SELECT * FROM meetings', callback);
  },

  findById(id_meeting, callback) {
    db.query(
      'SELECT * FROM meetings WHERE id_meeting = ?',
      [id_meeting],
      callback
    );
  },

  update(id_meeting, meeting, callback) {
    const query = `
      UPDATE meetings
      SET judul = ?, tanggal = ?, waktu = ?, deskripsi = ?
      WHERE id_meeting = ?
    `;
    db.query(query, [
      meeting.judul,
      meeting.tanggal,
      meeting.waktu,
      meeting.deskripsi,
      id_meeting
    ], callback);
  },

  delete(id_meeting, callback) {
    db.query(
      'DELETE FROM meetings WHERE id_meeting = ?',
      [id_meeting],
      callback
    );
  }
};

module.exports = MeetingRepository;
