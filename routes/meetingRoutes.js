const express = require('express');
const router = express.Router();
const MeetingController = require('../controller/meetingController');

router.post('/', MeetingController.create);
router.get('/', MeetingController.getAll);
router.get('/:id_meeting', MeetingController.getById);
router.put('/:id_meeting', MeetingController.update);
router.delete('/:id_meeting', MeetingController.delete);

module.exports = router;
