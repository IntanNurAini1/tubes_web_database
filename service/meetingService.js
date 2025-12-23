const MeetingRepository = require('../repository/meetingRepository');

const MeetingService = {
  createMeeting(data, callback) {
    if (!data.id_meeting || !data.judul) {
      return callback({ message: 'Data meeting tidak lengkap' });
    }
    MeetingRepository.create(data, callback);
  },

  getAllMeetings(callback) {
    MeetingRepository.findAll(callback);
  },

  getMeetingsById(id_meeting, callback) {
    MeetingRepository.findById(id_meeting, callback);
  },

  updateMeeting(id_meeting, data, callback) {
    MeetingRepository.update(id_meeting, data, callback);
  },

  deleteMeeting(id_meeting, callback) {
    MeetingRepository.delete(id_meeting, callback);
  }
};

module.exports = MeetingService;
