const MeetingService = require('../service/meetingService');

const MeetingController = {
  // create(req, res) {
  //   MeetingService.createMeeting(req.body, (err) => {
  //     if (err) return res.status(400).json(err);
  //     res.json({ message: 'Meeting berhasil ditambahkan' });
  //   });
  // },
  create(req, res) {
    console.log('TANGGAL DARI LARAVEL:', req.body.tanggal); // 👈 TAMBAH INI

    MeetingService.createMeeting(req.body, (err) => {
      if (err) return res.status(400).json(err);
      res.json({ message: 'Meeting berhasil ditambahkan' });
    });
  },

  getAll(req, res) {
    MeetingService.getAllMeetings((err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results);
    });
  },

  getById(req, res) {
    MeetingService.getMeetingsById(req.params.id_meeting, (err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results);
    });
  },

  update(req, res) {
    MeetingService.updateMeeting(req.params.id_meeting, req.body, (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Meeting berhasil diupdate' });
    });
  },

  delete(req, res) {
    MeetingService.deleteMeeting(req.params.id_meeting, (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Meeting berhasil dihapus' });
    });
  }
};

module.exports = MeetingController;
