const db = require('../config/db');

const MeetingRepository = {
  create(meeting, callback) {
    const query = `INSERT INTO meetings (id_meeting, judul, target_divisi, tanggal, waktu_mulai, waktu_selesai, deskripsi)VALUES (?, ?, ?, ?, ?, ?, ?)`;
    db.query(query, [
      meeting.id_meeting,
      meeting.judul,
      meeting.target_divisi,
      meeting.tanggal,
      meeting.waktu_mulai,
      meeting.waktu_selesai,
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
      SET judul = ?, target_divisi = ?, tanggal = ?, waktu_mulai = ?, waktu_selesai = ?, deskripsi = ?
      WHERE id_meeting = ?
    `;
    db.query(query, [
      meeting.judul,
      meeting.target_divisi,
      meeting.tanggal,
      meeting.waktu_mulai,
      meeting.waktu_selesai,
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
